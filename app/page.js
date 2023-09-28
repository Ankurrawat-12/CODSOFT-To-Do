"use client";

import React, { useState } from "react";

const page = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                title: title,
                description: description,
            },
        ]);
        setTitle("");
        setDescription("");
    };

    let renderTodos = <h2>You Don't Have Any Todo's Currently...</h2>;
    if (todos.length > 0) {
        renderTodos = todos.map((todo, index) => {
            return (
                <div key={index} className="text-xl">
                    <h2 className="text-3xl font-bold">{todo.title}</h2>
                    <p>{todo.description ? todo.description : "No Description Given..."}</p>
                    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                </div>
                
            );
        });
    }

    return (
        <>
            <h1 className="text-[#030e12] bg-[#fcde67] p-5 text-5xl font-bold text-center">
                My Todo List
            </h1>
            <div className="bg-[#fcde67] text-center pt-10">
                <form onSubmit={submitTodo}>
                    <input
                        autoFocus
                        type="text"
                        className="text-xl border-zinc-800 border-2 rounded-lg px-4 py-2 m-2"
                        placeholder="Todo Title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        className="text-xl border-zinc-800 border-2 rounded-lg px-4 py-2 m-2"
                        placeholder="Todo Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button className="bg-black text-white hover:text-[#5bccf6] p-2 text-xl rounded-lg m-2">
                        Add Todo
                    </button>
                </form>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="bg-[#fcde67] text-[#030e12] py-5 text-2xl text-center h-[100%]">
                    <ul>
                        {renderTodos}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default page;
