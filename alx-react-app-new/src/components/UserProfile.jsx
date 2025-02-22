const UserProfile = (props) => {
  return (
      <div style={{ 
          border: '1px solid gray', 
          padding: '20px', 
          margin: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
          <h2 style={{ 
              color: 'blue',
              marginBottom: '10px',
              fontSize: '24px'
          }}>{props.name}</h2>
          <p style={{ 
              marginBottom: '8px'
          }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
          <p style={{ 
              color: '#666',
              lineHeight: '1.5'
          }}>Bio: {props.bio}</p>
      </div>
  );
};

export default UserProfile;
