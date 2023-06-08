import skillsData from "@/data/skills.json"
import { Skill } from "@/types/models"

const SkillsSection = () => {
  const skills: Skill[] = skillsData


  return (
    <section id="skills">
      <header>
        <h2>TECHNICAL SKILLS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </header>
      <ul>
        {skills.map((s) => (
          <li>
            <img src={s.image.src} alt={s.image.alt} />
            <p>{s.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection