import React, { useState } from 'react';

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/students/create_student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to create student.');
      }

      alert('Student created successfully!');
      // Optionally, reset the form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: ''
      });
      setIsModalOpen(false);  // Close the modal after successful submission
    } catch (error) {
      console.error('Error creating student:', error.message);
      alert('Failed to create student. Please try again.');
    }
  };

  return (
    <div>
      {/* <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}> */}
      <button className="btn btn-info" onClick={() => setIsModalOpen(true)}>
        Create Student
      </button>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 10,
          left: 10,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            maxWidth: '400px',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            position: 'relative',
          }}>
            <button onClick={() => setIsModalOpen(false)} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '5px 10px',
              border: 'none',
              backgroundColor: '#ff0000',
              color: '#fff',
              cursor: 'pointer',
              borderRadius: '5px'
            }}>X</button>
            <h4 style={{ textAlign: 'left' }}>Create Student</h4>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                Age:
                <input type="text" name="age" value={formData.age} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateStudent;
