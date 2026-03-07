import Header from "./components/Header.ts";
import Login from "./components/login.ts";

function LoginApp(): string {
  const head = Header();
  const login = Login();

  return `
    <div class="pageElements flex flex-col min-h-screen">
      <div class="pageHeader flex justify-center">
        ${head}
      </div>

      <div class="pageLoginElement flex flex-1">
        ${login}
      </div>
    </div>
  `;
}

export default LoginApp;
