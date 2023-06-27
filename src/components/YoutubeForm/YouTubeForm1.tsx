import { useForm } from "react-hook-form";

const YouTubeForm1 = () => {
  const form = useForm({ mode: "onChange" }); // setup mode: onChange -> untuk mengaktifkan validasi ketika onChange
  const { register, watch } = form;
  const { name, ref, onChange, onBlur } = register("username");

  const values = watch();

  return (
    <div>
      <h1>YouTube Form 1</h1>
      {JSON.stringify(values)}
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm1;
