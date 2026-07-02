# Prompt Enhancer

A Chrome Extension that transforms short and vague prompts into detailed, structured, and high-quality prompts with a single click directly inside ChatGPT. The project also includes a Node.js + Express backend responsible for prompt refinement using an LLM.

---

## Features

- One-click prompt enhancement inside ChatGPT
- Converts brief prompts into detailed, structured instructions
- Automatically injects the enhanced prompt back into the input box
- Fast Node.js & Express backend
- Clean and lightweight Chrome Extension
- Easy integration with LLM APIs

---

## Tech Stack

### Frontend
- JavaScript
- HTML
- CSS
- Chrome Extension (Manifest V3)

### Backend
- Node.js
- Express.js

### APIs
- Groq API

---

## How It Works

1. Type a prompt inside ChatGPT.
2. Click the **Enhance Prompt** button.
3. The extension sends the prompt to the Express backend.
4. The backend generates a richer and more structured version using an LLM.
5. The enhanced prompt is automatically inserted back into ChatGPT, ready to submit.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/prompt-enhancer.git
cd prompt-enhancer
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
API_KEY=your_api_key_here
PORT=3000
```

### 4. Start the backend

```bash
npm start
```

### 5. Load the Chrome Extension

1. Open **chrome://extensions/**
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the `extension` folder

---

## Example

### Input

```text
Write a resume.
```

### Enhanced Output

```text
**Resume Generation Prompt**
Create a comprehensive, well-formatted, and tailored resume for a professional with [insert industry/field, e.g., software engineering, marketing, or finance], highlighting their [number] years of experience, education, and skills. The resume should include:
1. **Professional Summary**: A 2-3 sentence overview of the candidate's experience, skills, and achievements that showcases their value and qualifications.
2. **Work Experience**: A reverse chronological list of the candidate's work experience, including job titles, company names, dates of employment, and key accomplishments.
3. **Education**: A list of the candidate's educational background, including degrees earned, institutions attended, and relevant courses.
4. **Skills**: A comprehensive list of the candidate's technical, language, and soft skills, including proficiency levels.
5. **Achievements**: A section highlighting notable achievements, such as awards, publications, or patents.
6. **Relevant Projects**: A showcase of relevant projects, including descriptions, technologies used, and outcomes.
7. **Certifications**: A list of relevant certifications, licenses, or professional designations.
8. **Volunteer Experience**: A list of relevant volunteer work or community involvement.
9. **References**: A statement indicating that references are available upon request.
**Requirements**:
* Use a clean, modern design and layout.
* Utilize action verbs and bullet points to highlight achievements.
* Tailor the resume to the specific industry and job requirements.
* Ensure the resume is concise, easy to read, and free of errors.
**Output**:
A well-structured, well-formatted, and tailored resume that effectively showcases the candidate's experience, skills, and achievements.
**Example Input**:
* Industry: Software Engineering
* Number of years of experience: 5
* Education: Bachelor's degree in Computer Science
* Skills: Python, Java, JavaScript, Agile methodology
* Relevant projects: Developed a machine learning model that improved accuracy by 25%
* Certifications: Certified Scrum Master (CSM)
**Generated Resume**:
[Your Name]
[Address]
[Phone Number]
[Email]
**Professional Summary**:
Highly motivated and experienced software engineer with 5 years of experience in developing scalable and efficient software solutions. Skilled in Python, Java, and JavaScript, with a strong background in Agile methodology.
**Work Experience**:
* Software Engineer, ABC Company (2018-Present)
	+ Developed a machine learning model that improved accuracy by 25%
	+ Implemented a scalable database solution that increased performance by 50%
* Software Developer, DEF Company (2015-2018)
	+ Contributed to the development of a cloud-based platform that achieved a 90% reduction in latency
**Education**:
* Bachelor's degree in Computer Science, XYZ University (2015)
**Skills**:
* Programming languages: Python, Java, JavaScript
* Agile methodology
* Cloud platforms: AWS, Azure
* Databases: MySQL, MongoDB
**Achievements**:
* Developed a machine learning model that improved accuracy by 25%
* Implemented a scalable database solution that increased performance by 50%
**Relevant Projects**:
* Developed a machine learning model that improved accuracy by 25%
* Implemented a scalable database solution that increased performance by 50%
**Certifications**:
* Certified Scrum Master (CSM)
**Volunteer Experience**:
* Member, XYZ University's Computer Science Club (2013-2015)
**References**:
Available upon request.
```

---

## Future Improvements

- Multiple enhancement modes (Technical, Creative, Academic, Business)
- Prompt history
- Keyboard shortcuts
- Multi-model support
- User authentication
- Custom prompt templates
- Prompt quality scoring

---

## Motivation

Many users know what they want to ask but struggle to write prompts that fully express their intent. Prompt Enhancer simplifies this process by automatically expanding concise inputs into well-structured prompts, improving response quality while maintaining a seamless workflow.
