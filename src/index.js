function person(obj) {
  if (obj.health > 50) {
    return 'healthy';
  } if (obj.health <= 50 && obj.health > 15) {
    return 'wounded';
  }
  return 'critical';
}

exports.person = person;
