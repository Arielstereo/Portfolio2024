const EmailTemplate = ({ username, email, message }) => {
  return (
    <div>
      <div>
        <h1>de: {username}</h1>
        <h4>email: {email}</h4>
      </div>
      <h6>Mensaje: {message}</h6>
    </div>
  );
};

export default EmailTemplate;
