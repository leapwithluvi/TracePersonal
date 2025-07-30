import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");
  const [target, setTarget] = useState("");
  const [visibility, setVisibility] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const saveChallenge = async (e) => {
    e.preventDefault();
    let thumbnailFilename = "";

    if (file) {
      const formData = new FormData();
      formData.append("thumbnail", file);
      const uploadRes = await axios.post(
        "http://localhost:5000/image",
        formData
      );
      if (!uploadRes.data.filename) {
        setMsg("Gagal upload gambar thumbnail!");
        return;
      }
      thumbnailFilename = uploadRes.data.filename;
    } else {
      setMsg("Thumbnail wajib diisi!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/challenges", {
        title,
        description,
        start_date: startDate,
        end_date: endDate,
        type,
        target,
        visibility,
        thumbnail: thumbnailFilename,
      });
      alert("Challenge berhasil dibuat!");
      navigate("/challenges");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      console.log("Server error:", error.response?.data);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underlfine", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <section className="min-h-screen bg-[#F9F9F9] dark:bg-gray-900 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl dark:bg-gray-800 p-8 shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Create Challenge
        </h2>
        <form className="space-y-4" onSubmit={saveChallenge}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="bg-white">
            <ReactQuill
              modules={modules}
              formats={formats}
              value={description}
              onChange={setDescription}
              className="h-40 xl:mb-14 sm:mb-28"
            />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label className="text-sm text-white">Start Challenge:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label className="text-sm text-white">End Challenge:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label className="text-sm text-white">Type Challenge:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            >
              <option value="">-- Type Daily goal --</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="flex items-start flex-col justify-start">
            <label className="text-sm text-white">Target Challenge:</label>
            <input
              type="text"
              placeholder="Target Challenge (bisa membuat website)"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label className="text-sm text-white">Visibility:</label>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            >
              <option value="">-- Pilih Visibility --</option>
              <option value="public">Public</option>
              <option value="team">Team</option>
            </select>
          </div>

          <input
            type="file"
            onChange={handleFile}
            accept="image/png, image/jpeg, image/jpg"
            className="block text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Create
          </button>
        </form>
        {msg && <div className="text-red-500 mt-2">{msg}</div>}
      </div>
    </section>
  );
};

export default CreateChallenge;
