function skillsMember() {
  const skills = {
    skills: ['JavaScript', 'React', 'Node.js'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    }
  };
  return skills;
}