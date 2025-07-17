import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");
  const [target, setTarget] = useState("");
  const [visibility, setVisibility] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getChallengeById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/challenges/${id}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
        setThumbnail(response.data.thumbnail);
        setStartDate(response.data.start_date?.slice(0, 10));
        setEndDate(response.data.end_date?.slice(0, 10));
        setType(response.data.type);
        setTarget(response.data.target);
        setVisibility(response.data.visibility);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getChallengeById();
  }, [id]);

  const updateChallenge = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/challenges/${id}`, {
        title,
        description,
        start_date: startDate,
        end_date: endDate,
        type,
        target,
        visibility,
      });
      alert("Challenge berhasil diupdate!");
      navigate("/challenges");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
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
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Edit Challenge</h2>

        {/* <div className="bg-red-500 text-white px-4 py-2 rounded mb-4">
          This is an error message
        </div> */}

        <form className="space-y-4" onSubmit={updateChallenge}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />

          {/* ReactQuill */}
          <div className="bg-white">
            <ReactQuill
              modules={modules}
              formats={formats}
              value={description}
              onChange={setDescription}
              className="h-40 xl:mb-14 sm:mb-28"
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="start_date"
              class="text-sm text-black-700 dark:text-black-200 mr-2"
            >
              Start Challenge:
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="end_date"
              class="text-sm text-black-700 dark:text-black-200 mr-2"
            >
              End Challenge:
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="type"
              class="text-sm text-black-700 dark:text-black-200 mr-2"
            >
              Type Challenge:
            </label>
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

          <div class="flex items-start flex-col justify-start">
            <label
              for="target"
              class="text-sm text-black-700 dark:text-black-200 mr-2"
            >
              Target Challenge:
            </label>
            <input
              type="text"
              placeholder="Target Challenge (bisa membuat website)"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="visibility"
              class="text-sm text-black-700 dark:text-black-200 mr-2"
            >
              Visibility:
            </label>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="w-full px-4 py-2 border border-black-300 rounded"
            >
              <option value="">-- Pilih Visibility --</option>
              <option value="public">Public</option>
              <option value="private">Team</option>
            </select>
          </div>

          {/* File input */}
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="image/png, image/jpg, image/jpeg"
            className="block"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormEditChallenge;
