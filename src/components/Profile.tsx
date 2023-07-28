import { RxChatBubble, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { Button } from "./Button";

export function Profile() {
	return (
		<>
			<div className=" p-5 flex flex-col items-center gap-10 sm:flex-row">
				<img
					className="rounded-full w-[100%] sm:w-[30%]"
					src="https://avatars.githubusercontent.com/u/55026292?v=4"
					alt=""
				/>
				<aside className="flex flex-col	 justify-normal text-justify gap-5">
					<h2 className="text-center text-xl sm:text-3xl sm:text-left ">
						Desenvolvedor de Softwere | Web
					</h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus modi soluta debitis dolorum tempora,
					perferendis, aspernatur blanditiis voluptate libero sint ea
					nesciunt vel distinctio accusantium labore corrupti ut,
					excepturi doloribus? Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Odio facere commodi animi. Minima soluta
					quis omnis animi consequuntur est alias, repellat cumque?
					Sit at debitis dolorem, fuga vero corrupti quia?
					<span className="flex justify-center sm:justify-start gap-5">
						<Button text="Whatsapp">
							{" "}
							<RxChatBubble className="h-[20px] w-[20px]" />{" "}
						</Button>
						<Button
							text="LinkedIn"
							url="https://www.linkedin.com/in/claudio-tomas/"
						>
							{" "}
							<RxLinkedinLogo className="h-[20px] w-[20px]" />{" "}
						</Button>
						<Button
							text="GitHub"
							url="https://github.com/claudi-tm"
						>
							<RxGithubLogo className="h-[20px] w-[20px]" />
						</Button>
					</span>
				</aside>
			</div>
		</>
	);
}
