import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MainPage = () => {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const send = (values) => {
        setUsers([...users, values]);
        reset();  // Очищаем поля после добавления
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const handleClearAll = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <div>
                    <input placeholder={'name'} {...register('name', { required: true })} />
                    {errors.name && <span style={{color: "red"}}>Это поле обязательно</span>}
                </div>
                <div>
                    <input placeholder={'username'} {...register('username', { required: true })} />
                    {errors.username && <span style={{color: "red"}}>Это поле обязательно</span>}
                </div>
                <div>
                    <input placeholder={'email'} {...register('email', { required: true })} />
                    {errors.email && <span style={{color: "red"}}>Это поле обязательно</span>}
                </div>
                <div>
                    <input placeholder={'phone'} {...register('phone', { required: true })} />
                    {errors.phone && <span style={{color: "red"}}>Это поле обязательно</span>}
                </div>
                <div>
                    <input placeholder={'website'} {...register('website')} />
                </div>
                <button type="submit">Создать</button>
                <button type="button" onClick={handleClearAll}>Очистить таблицу</button>
            </form>

            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <div>
                    {users.map((user, index) => (
                        <div key={index} style={{display: "flex", gap: "20px", justifyContent: "center", textAlign: "center"}}>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website ? user.website : "N/A"}</p>
                            <button onClick={() => handleDelete(index)}>Удалить</button>
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    );
};

export default MainPage;