import React from 'react';
import './skills.css';

const skillsData = [
  {
    category: "学习能力",
    icon: "📚",
    skills: [
      {
        name: "自主学习",
        description: "善于规划学习路径，掌握高效的学习方法",
        level: 95
      },
      {
        name: "知识分享",
        description: "擅长将复杂知识转化为易懂的内容",
        level: 90
      },
      {
        name: "时间管理",
        description: "科学安排时间，平衡学习与生活",
        level: 85
      }
    ]
  },
  {
    category: "化妆技巧",
    icon: "💄",
    skills: [
      {
        name: "底妆技巧",
        description: "精通各种肤质的底妆打造，自然服帖",
        level: 92
      },
      {
        name: "眼妆设计",
        description: "擅长根据不同场合设计合适的眼妆",
        level: 88
      },
      {
        name: "妆容搭配",
        description: "能根据服装、场合调整妆容风格",
        level: 90
      }
    ]
  },
  {
    category: "形象提升",
    icon: "✨",
    skills: [
      {
        name: "色彩搭配",
        description: "了解个人色彩诊断，提供着装建议",
        level: 95
      },
      {
        name: "护肤知识",
        description: "精通各类护肤品的使用和搭配方法",
        level: 90
      },
      {
        name: "穿搭技巧",
        description: "擅长根据身材特点进行服装搭配",
        level: 88
      }
    ]
  }
];

function Skills() {
  return (
    <div className="skills-page">
      <h1 className="skills-title">个人特长</h1>
      
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.category}</h2>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="progress-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills; 