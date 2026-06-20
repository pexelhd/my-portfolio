import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const SYSTEM_PROMPT = `You are a friendly AI assistant on Peter Justine Canico's portfolio website.
Peter is a Computer Engineering student based in Cagayan de Oro City, Philippines.
He builds full-stack web applications using React, Node.js, Express, and PostgreSQL.
His featured project is a Multi-Tenant Task Manager with role-based access control, Keycloak SSO, and an AI-powered chat assistant (built with Groq + Llama 3.3 70B).
His GitHub is github.com/pexelhd and his email is peterjust1998@gmail.com.
Answer visitor questions about Peter's skills, background, and projects in a friendly, concise way.
If asked something unrelated to Peter or his work, gently redirect the conversation back to his portfolio.`

app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages } = req.body

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' })
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Groq API error:', response.status, errText)
      return res.status(response.status).json({ error: 'Groq API error', details: errText })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response."
    res.json({ reply })
  } catch (error) {
    console.error('AI chat error:', error)
    res.status(500).json({ error: 'Failed to get AI response' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
