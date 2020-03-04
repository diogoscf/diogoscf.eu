$(document).ready(() => {
  $.getJSON("../assets/achievements.json", (data) => {
    $.each(data, (i, achievement) => {
      var skills = []
      $.each(achievement.skills, (i, skill) => {
        if (skill.type === "fa") {
          var className = skill.class || skill.faName
          skills.push(`<span class="${className}"><i class="${skill.faType} fa-${skill.faName}"></i>${skill.text}</span>`)
        } else if (skill.type == "devicon") {
          skills.push(`<span class="${skill.devName}"><i class="devicon-${skill.devName} colored"></i>${skill.text}</span>`)
        }
      });
      $("<div/>", {
          class: "event"
        }).appendTo(".achievements")
        .append(`<p>${achievement.name}</p>`)
        .append(`<div class="used-skills">${skills.join("")}</div>`)
    })
  })
})
