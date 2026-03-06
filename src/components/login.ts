import "./style.css";

function Login(): string {
  return `
  <main class="flex justify-center items-center font-sans flex-col min-h-screen animation-fadeinup">
      <section class="panel w-[30vw] h-[60vh] rounded-[30px] overflow-hidden">
          <div class="title_window flex justify-center border-b  h-[20vh] items-center text-7xl font-bold">
              <h2>Login</h2>
          </div>

          <div class="input_labels flex justify-center items-center p-5">
              <label>
                  <input class="input-log border-2 border-white/30 rounded-xl w-[20vw] rounded-[60px] text-xl p-2 font-mono" placeholder="enter your login" />
              </label>
          </div>

          <div class="input_labels flex justify-center items-center p-10">
              <label>
                  <input type="password" class="input-pass border-2 border-white/30 rounded-xl w-[20vw] rounded-[60px] text-xl p-2 font-mono" placeholder="enter your password" />
              </label>
          </div>

          <div class="input-btn justify-center flex animation-slide" role="button" tabindex="0">
              <div class="input-btn-content w-[12vw] p-4 border-2 border-white/30 justify-center flex rounded-full select-none active:scale-95" role="button" tabindex="0">
                  <p>Login</p>
              </div>
          </div>
      </section>
  </main>
  `;
}

export default Login;
