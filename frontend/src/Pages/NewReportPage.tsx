import { useState } from "react"
import { createReport } from "../Api/api.reports"

export default function NewReportPage() {

  const [data, setData] = useState({
    message: "",
    urgency: "",
    category: "",
  })

  const [file, setFile] = useState<File | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // ❗ מונע רענון של הדף

    const token: any = localStorage.getItem("token")

    const formData = new FormData()
    formData.append("message", data.message)
    formData.append("urgency", data.urgency)
    formData.append("category", data.category)

    if (file) {
      formData.append("image", file)
    }
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const res = await createReport(token, formData)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="reportPage" onSubmit={handleSubmit}>

      <div>New Report Page</div>

      urgency*
      <select
        name="urgency"
        value={data.urgency}
        required
        onChange={handleChange}
      >
        <option value="" disabled hidden>Choose Urgency...</option>
        <option value="intelligence">intelligence</option>
        <option value="logistics">logistics</option>
        <option value="alert">alert</option>
      </select>

      category *
      <select
        name="category"
        value={data.category}
        required
        onChange={handleChange}
      >
        <option value="" disabled hidden>Choose Category...</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      message*
      <textarea
        name="message"
        value={data.message}
        onChange={handleChange}
        required
        placeholder="message"
      />

      img: (optional)
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <button type="submit">Send</button>

    </form>
  )
}