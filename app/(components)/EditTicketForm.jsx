"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  //make changes here
  const startingTicketData = {
    title: "",
    description: "",
    name:"",
    email:"",
    status: "not started",
    category: "Shambhavi Mahamudra Kriya",
  };
  // make changes here
  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["name"] = ticket.name;
    startingTicketData["email"] = ticket.email;
    startingTicketData["description"] = ticket.description;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);  

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (EDITMODE) {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
        if (!res.ok) {
          throw new Error("Failed to update ticket");
        }
      } else {
        const res = await fetch("/api/Tickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
        if (!res.ok) {
          throw new Error("Failed to create ticket");
        }
      }

      // Navigate to home and reload after successful API call
      router.push("/");
    }
    catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  const handleSubmit_usr = async (e) => {
    e.preventDefault();

    try {
      if (EDITMODE) {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
        if (!res.ok) {
          throw new Error("Failed to update ticket");
        }
      } else {
        const res = await fetch("/api/Tickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
        if (!res.ok) {
          throw new Error("Failed to create ticket");
        }
      }

      // Navigate to home and reload after successful API call
      router.push("/ThankYou");
    }
    catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  const categories = [
    "Shambhavi Mahamudra Kriya",
    "Shunaya Intensive",
    "Shakti Chalana",
    "Angamardana",
  ];

  return (
    <div className=" flex justify-center my-16">
      <form
        onSubmit={EDITMODE ? handleSubmit : handleSubmit_usr}
        method="post"
        className="flex flex-col gap-3 w-3/4 bg-card"
      >
        <h1 className="text-white">{EDITMODE ? "Assistance Page" : "Program Support Form"}</h1>
        <h6 className="text-white">{EDITMODE ? "Namaskaram! this form is for volunteers to review the queries, send the mail and then update the status after all the queries are resolved" 
        : "Namaskaram! if you face any problems with any of the programs you have attended please fill out the form below and then out team will get back to you shortly!"}</h6>
        
        <label className="text-white">Title</label>
        <input
          className="bg-white"
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        
        
        <label className="text-white">Name</label>
        <input
          className="bg-white"
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.name}
        />


        <label className="text-white">Email</label>
        <input
          className="bg-white"
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.email}
        />


        <label className="text-white">Description</label>
        <textarea
          className="bg-white"
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label className="text-white">Category</label>
        <select
          className="bg-white"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>


        <div>
          {EDITMODE ? (
            <>
            <label className="text-white">Status</label>

            <select 
              className="text-white"
              name="status" 
              value={formData.status} 
              onChange={handleChange}>
              <option value="not started">Not Started</option>
              <option value="started">Started</option>
              <option value="done">Done</option>
            </select>
            </>
          ) : null}
         </div>

        <input
          type="submit"
          className="btn max-w-xs text-white"
          value={EDITMODE ? "Update Request" : "Request Support"}
        />
      </form>
    </div>
    )
};

export default EditTicketForm;
