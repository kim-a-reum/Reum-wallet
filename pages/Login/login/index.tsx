import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { useContext } from "react";
import { GlobalContext } from "../../_app";
import { useRouter } from "next/router";

const initialInputs = {
  email: "",
  password: "",
};

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState(initialInputs);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);

  const onChangeInput = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      if (setAccessToken)
        setAccessToken(result.data?.loginUser.accessToken || "");
      router.push("/Login/loginsuccess");
    } catch (error) {
      if (error instanceof Error) alert({ content: error.message });
    }
  };
  return (
    <div>
      이메일 : <input type="text" id="email" onChange={onChangeInput} />
      비밀번호 :{" "}
      <input type="password" id="password" onChange={onChangeInput} />
      <button onClick={onClickLogin}>로그인하기!! </button>
    </div>
  );
}
