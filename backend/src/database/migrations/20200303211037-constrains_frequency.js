'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint('frequency', ['class_id', 'student_id'], {
      type: 'unique',
      name: 'unique_pair_of_frequency',
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint('frequency', 'unique_pair_of_frequency');
  },
};
