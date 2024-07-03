import React, { useState } from 'react';

const StudentMarks = () => {
  const [formData, setFormData] = useState({
    id: '',
    maths: '',
    physics: '',
    geology: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/students/student_marks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to insert marks for student.');
      }

      alert('Student marks entered successfully!');
      setFormData({
        id: '',
        maths: '',
        physics: '',
        geology: ''
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error inserting marks of a student:', error.message);
      alert('Failed to insert marks of a student. Please try again.');
    }
  };

  return (
    <div>
      {/* <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}> */}
      <button className="btn btn-info" onClick={() => setIsModalOpen(true)}>
        Enter Marks
      </button>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
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
            <h4 style={{ textAlign: 'left' }}>Enter Marks</h4>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                ID:
                <input type="text" name="id" value={formData.id} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                Mathematics:
                <input type="text" name="maths" value={formData.maths} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                Physics:
                <input type="text" name="physics" value={formData.physics} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                Geology:
                <input type="text" name="geology" value={formData.geology} onChange={handleChange} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
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

export default StudentMarks;
