import skillsData from "@/data/skills.json"
import { Skill } from "@/types/models"

const SkillsSection = () => {
  const skills: Skill[] = skillsData

  return (
    <section className="content" id="skills">
      <header>
        <h2>TECHNICAL SKILLS</h2>
        <p className="section-blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </header>
      <ul>
        {skills.map((s) => (
          <li key={s.id}>
            <img src={s.image.src} alt={s.image.alt} />
            <p>{s.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection