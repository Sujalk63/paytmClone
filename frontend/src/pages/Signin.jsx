import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="SujalK" label={"Username"} />
        <InputBox placeholder="sujal@123" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"}  />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

// In named exports (e.g., export const, export function), 
// you need to use curly braces when importing to specify 
// which named exports you want to import. However, with 
// export default, you don't need curly braces when importing, 
// as it exports a single value as the default export of the module.


// apart from anker tag we could have used link atag where to would be the prop which is a predefined prop for routing
