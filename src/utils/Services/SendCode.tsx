import React from "react";
import { snackbar } from "mdui";
import { Input } from "mdui-in-react";
import Axios from "../axios";

type State = any;

class Ui extends React.Component<
	{
		onInput(newText: string): void;
		xcode: any;
		email: string;
	},
	State
> {
	constructor(props: Readonly<{ onInput(newText: string): void; xcode: any; email: string; }>) {
		super(props);
		this.state = {
			waitProgress: 61,
		};
	}
	componentWillUnmount() {
		// @ts-expect-error ts-migrate(2551) FIXME: Property 'waiting' does not exist on type 'Window ... Remove this comment to see the full error message
		clearInterval(window.waiting);
	}
	getCode() {
		var { waitProgress } = this.state;
		// @ts-expect-error ts-migrate(2551) FIXME: Property 'waiting' does not exist on type 'Window ... Remove this comment to see the full error message
		window.waiting = setInterval((_) => {
			if (waitProgress < 0) {
				// @ts-expect-error ts-migrate(2551) FIXME: Property 'waiting' does not exist on type 'Window ... Remove this comment to see the full error message
				clearInterval(window.waiting);
				this.setState({ waitProgress: 61 }, () =>
				// @ts-expect-error
					setInterval(window.waiting)
				);
			} else {
				waitProgress--;
				this.setState({ waitProgress: waitProgress });
			}
		}, 1000);
		Axios.get(
			"https://api.ygktool.cn/ygktool/xcode?email=" + this.props.email
		).then((response) => {
			var json = JSON.parse(response.request.response);
			switch (json.code) {
				case 500:
					snackbar({ message: "验证码发送失败，请重试" });
					break;
				case 666:
					snackbar({ message: "验证码已发送，请注意检查邮箱垃圾桶" });
					break;
				default:
					snackbar({ message: "验证码发送失败，请重试" });
			}
		});
	}
	render() {
		const { waitProgress } = this.state;
		const onWaiting = waitProgress >= 0 && waitProgress <= 60;
		const { onInput, xcode, email } = this.props;
		return (
			<div className="mdui-col mdui-card">
				<div className="mdui-card-media">
					<div className="mdui-card-primary">
						<div className="mdui-card-primary-title">验证</div>

						<div className="mdui-card-primary-subtitle">
							验证码将发送到{email}
						</div>
					</div>

					<div className="mdui-card-content">
						<Input
							onValueChange={onInput}
							header="验证码"
							icon="verified_user"
							type="number"
							value={xcode}
						/>
					</div>

					<div className="mdui-card-actions">
						<button
							onClick={(_) => {
								this.getCode();
							}}
							disabled={onWaiting}
							className="mdui-btn"
						>
							{`发送验证码${
								onWaiting ? `(${waitProgress}s)` : ""
							}`}
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Ui;