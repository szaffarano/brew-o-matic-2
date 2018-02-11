export const diff = (obj1, obj2, excludes) => {
  let helper = new DiffHelper();
  helper.excludes = excludes || [];
  return helper.diff(obj1, obj2);
}

export const formatDate = (date, defaultFormatter) => {
  date = new Date(date);
  //Fecha de hoy en segundos
  let today = new Date().getTime() / 1000;
  //Fecha del comentario en segundos
  let dateSec = date.getTime() / 1000;

  //Diferencia en segundos
  let diffSec = today - dateSec;

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let tomorroy = new Date();
  tomorroy.setDate(tomorroy.getDate() + 1);

  if (diffSec < 0) { //En el futuro
    if (diffSec > -10) {
      return "Ahora";
    } else if (diffSec > -60) {
      return "En menos de un minuto";
    } else if (diffSec > -(60 * 60)) { // Si es menos de una hora
      return "En " + Math.round(-diffSec / 60) + " minutos";
    } else if (date.getDate() == new Date().getDate() &&
      date.getMonth() == new Date().getMonth() &&
      date.getYear() == new Date().getYear()) { //si aun es el mismo dia, pero mas adelante
      return "En " + Math.floor(-diffSec / 60 / 60) + ":" + pad(Math.floor((-diffSec / 60) % 60), 2) + " Horas";
    } else if (date.getDate() == tomorroy.getDate() &&
      date.getMonth() == tomorroy.getMonth() &&
      date.getYear() == tomorroy.getYear()) { // Si sera mañana
      return "Mañana " + defaultFormatter(date, 'HH:mm');
    } else {
      let days = -diffSec / 60 / 60 / 24;
      let years = Math.floor(days / 365);
      let daysLeft = Math.floor(days % 365);
      let months = Math.floor(daysLeft / 30);
      let daysLeftMonth = Math.floor(daysLeft % 30);
      return 'En $years$months$days$hours'
        .replace('$years', yearText(years))
        .replace('$months', monthsText(months, years))
        .replace('$days', daysText(daysLeftMonth, months, years))
        .replace('$hours', hoursText(Math.floor(-diffSec / 60 / 60 % 24), daysLeftMonth, months, years));
    }
  } else { // en el pasado
    if (diffSec < 10) { // Si es menos de un minuto
      return "Ahora";
    } else if (diffSec < 60) { // Si es menos de un minuto
      return "Hace menos de un minuto";
    } else if (diffSec < (60 * 60)) { // Si es menos de una hora
      return "Hace " + Math.round(diffSec / 60) + " minutos";
    } else if (date.getDate() == new Date().getDate() &&
      date.getMonth() == new Date().getMonth() &&
      date.getYear() == new Date().getYear()) { //si aun es el mismo dia
      // return "Hoy" + " hace " + Math.round(diffSec/60/60) + " horas";
      return "Hoy" + " hace " + Math.floor(diffSec / 60 / 60) + ":" + pad(Math.floor((diffSec / 60) % 60), 2) + " Horas";
    } else if (date.getDate() == yesterday.getDate() &&
      date.getMonth() == yesterday.getMonth() &&
      date.getYear() == yesterday.getYear()) { // Si fue durane el dia de ayer
      return "Ayer " + defaultFormatter(date, 'HH:mm');
    } else {
      let days = diffSec / 60 / 60 / 24;
      let years = Math.floor(days / 365);
      let daysLeft = Math.floor(days % 365);
      let months = Math.floor(daysLeft / 30);
      let daysLeftMonth = Math.floor(daysLeft % 30);
      return 'Hace $years$months$days$hours'
        .replace('$years', yearText(years))
        .replace('$months', monthsText(months, years))
        .replace('$days', daysText(daysLeftMonth, months, years))
        .replace('$hours', hoursText(Math.floor(diffSec / 60 / 60 % 24), daysLeftMonth, months, years));
    }
  }

};

export const pad = (value, zeros) => {
  value = value.toString();
  if (value.length > zeros) {
    return value;
  } else {
    let result = value;
    for (let i = 0; i < zeros - value.length; i++) {
      result = "0" + result;
    }
    return result;
  }
}

function DiffHelper() {
  let ready;
  let result;
  this.excludes = [];

  function parentArray(parent) {
    return {
      parent: parent,
      wrap: function(field) {
        return parent + "[" + field + "]";
      }
    };
  }

  function parentObject(parent) {
    return {
      parent: parent,
      wrap: function(field) {
        return parent + "." + field;
      }
    };
  }

  this.compareAll = function(obj1, obj2, parent) {
    for (let i in obj1) {
      if (ready.indexOf(i) == -1) {
        ready.push(i);
        let p;
        if (obj1 instanceof Array) {
          p = parentArray("$")
        } else {
          p = parentObject("$");
        }
        this.compare(obj1, obj2, i, parent || p);
      }

    }
  };

  this.compare = function(o1, o2, field, parent) {
    let diff = [];
    if (o1[field] instanceof Date && o2[field] instanceof Date) {
      if (o1[field].getTime() != o2[field].getTime()) {
        diff = [parent.wrap(field)];
      }
    } else if (o1[field] instanceof Array && o2[field] instanceof Array) {
      let helper = new DiffHelper();
      helper.excludes = this.excludes;
      diff = helper.diff(o1[field], o2[field], parentArray(parent.wrap(field)));
    } else if (o1[field] instanceof Object && o2[field] instanceof Object) {
      let helper = new DiffHelper();
      helper.excludes = this.excludes;
      diff = helper.diff(o1[field], o2[field], parentObject(parent.wrap(field)));
    } else if (o1[field] != o2[field]) {
      diff = [parent.wrap(field)];
    }
    for (let i = 0; i < diff.length; i++) {
      let fail = false;
      for (let ri = 0; ri < this.excludes.length; ri++) {
        let reg = new RegExp(this.excludes[ri]);
        let fail = fail || reg.test(diff[i]);
      }
      if (!fail) {
        result.push(diff[i]);
      }
    }
  };

  this.diff = function(obj1, obj2, parent) {
    ready = [];
    result = [];
    this.compareAll(obj1, obj2, parent);
    this.compareAll(obj2, obj1, parent);
    return result;
  };
}

function hoursText(hours, days, months, years) {
  if (months > 0 || years > 0) return '';
  //FIXME, ver si conviene solo mostar la hora cuando son menos de 10 dias
  if (hours > 1) {
    return ', ' + hours + ' horas';
  } else if (hours === 1) {
    return ', 1 hora';
  } else {
    return '';
  }
}

function yearText(years) {
  if (years > 1) {
    return years + ' años';
  } else if (years === 1) {
    return '1 año';
  } else {
    return '';
  }
}

function daysText(days, months, years) {
  if (days > 1) {
    return colon(months, years) + days + ' dias';
  } else if (days === 1) {
    return colon(months, years) + '1 dia';
  } else {
    return '';
  }
}

function colon(value, value2) {
  if (value !== 0 || (value2 && value2 !== 0)) {
    return ', ';
  } else {
    return '';
  }
}

function monthsText(months, years) {
  if (months > 1) {
    return colon(years) + months + ' meses';
  } else if (months === 1) {
    return colon(years) + '1 mes';
  } else {
    return '';
  }
}
