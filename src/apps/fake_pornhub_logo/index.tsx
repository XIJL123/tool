import React from "react";
import html2canvas from "html2canvas";

import saveFile from "../../utils/fileSaver";

const IfBr = ({
    statu
}: any) => {

	if (statu === "vertical") return <br></br>;
	return null;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'hStyle' does not exist on type '{ childr... Remove this comment to see the full error message
const FakeLogo = React.forwardRef(({ hStyle, frontStyle, lastStyle }, ref) => {
	var logo = (

		<div
			style={{
				paddingTop: "50px",
				borderRadius: "4px",
				backgroundColor: "#000000",
				width: "90%",
				height: "200px",
				textAlign: "center",
			}}
			id="blackborad"
		>

			<h1
				style={{
					marginTop: "20px",
					fontFamily: "SimHei",
// @ts-expect-error ts-migrate(2322) FIXME: Type '"1000"' is not assignable to type '"-moz-ini... Remove this comment to see the full error message
					fontWeight: "1000",
					letterSpacing: "-1.5px",
					fontSize: hStyle.size + "em",
				}}
				className="mdui-text-center"
			>

				<span
					style={{
						borderRadius: "4px",
						color: frontStyle.color,
						backgroundColor: frontStyle.backgroundColor,
					}}
					onInput={(e) => {
						/*props.onTextChange({
                        front:{
                            text:e.target.innerText,
                            backgroundColor:props.frontStyle.backgroundColor
                        }
                    })*/
					}}
					contentEditable={true}
				>
					Ygkt
				</span>

				<IfBr statu={hStyle.array} />

				<span
					style={{
						display: "inline",
						backgroundColor: lastStyle.backgroundColor,
						borderRadius: "4px",
						color: lastStyle.color,
						padding: "0px 4px 0px 4px",
						marginLeft: "3px",
					}}
// @ts-expect-error ts-migrate(2322) FIXME: Type 'unknown' is not assignable to type 'HTMLSpan... Remove this comment to see the full error message
					ref={ref}
					contentEditable={true}
				>
					ool
				</span>
			</h1>
		</div>
	);
	return logo;
});

//字体大小
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'onTextChange' implicitly has an '... Remove this comment to see the full error message
const FontSize = ({ onTextChange, hStyle }) => {
	return (

		<div className="mdui-textfield">

			<label className="mdui-textfield-label">字体大小</label>

			<label className="mdui-slider">

				<input
					onChange={(e) => {
						onTextChange({
							hStyle: {
								size: e.target.value,
								array: hStyle.array,
							},
						});
					}}
					value={hStyle.size}
					type="range"
					step="1"
					min="1"
					max="10"
				/>
			</label>
		</div>
	);
};

//颜色翻转
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'onStatuChange' implicitly has an ... Remove this comment to see the full error message
const ColorTurn = ({ onStatuChange }) => {
	return (

		<label className="mdui-checkbox">

			<input
				onChange={(e) => {
					onStatuChange(e.target.checked);
				}}
				type="checkbox"
			/>

			<i className="mdui-checkbox-icon"></i>
			颜色翻转
		</label>
	);
};

//竖直排列
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'onStatuChange' implicitly has an ... Remove this comment to see the full error message
const ArrayTurn = ({ onStatuChange }) => {
	return (

		<label className="mdui-checkbox">

			<input
				onChange={(e) => {
					onStatuChange(e.target.checked);
				}}
				type="checkbox"
			/>

			<i className="mdui-checkbox-icon"></i>
			竖直排列
		</label>
	);
};

type UiState = any;

class Ui extends React.Component<{}, UiState> {
	constructor(props: {}) {
		super(props);
// @ts-expect-error ts-migrate(2339) FIXME: Property 'inputRef' does not exist on type 'Ui'.
		this.inputRef = React.createRef();
		this.state = {
			hStyle: {
				size: 4.0,
				array: "transverse",
			},
			front: {
				color: "#ffffff",
				backgroundColor: "transparent",
			},
			last: {
				color: "#000000",
				backgroundColor: "#f79817",
			},
		};
	}
	render() {
		const { hStyle, front, last } = this.state;
		return (

			<>
{/* @ts-expect-error ts-migrate(2339) FIXME: Property 'center' does not exist on type 'JSX.Intr... Remove this comment to see the full error message */}
				<center>

					<FakeLogo
// @ts-expect-error ts-migrate(2322) FIXME: Property 'hStyle' does not exist on type 'Intrinsi... Remove this comment to see the full error message
						hStyle={hStyle}
						frontStyle={front}
						lastStyle={last}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'inputRef' does not exist on type 'Ui'.
						ref={this.inputRef} //没卵用
					/>
{/* @ts-expect-error ts-migrate(2339) FIXME: Property 'center' does not exist on type 'JSX.Intr... Remove this comment to see the full error message */}
				</center>

				<div className="mdui-card mdui-p-a-1">

					<FontSize
						hStyle={hStyle}
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'newStyle' implicitly has an 'any' type.
						onTextChange={(newStyle) => {
							this.setState(newStyle);
						}}
					/>

					<ArrayTurn
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'statu' implicitly has an 'any' type.
						onStatuChange={(statu) => {
							if (statu) {
								this.setState({
									hStyle: {
										size: hStyle.size,
										array: "vertical",
									},
								});
							} else {
								this.setState({
									hStyle: {
										size: hStyle.size,
										array: "transverse",
									},
								});
							}
						}}
					/>

					<br></br>

					<ColorTurn
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'statu' implicitly has an 'any' type.
						onStatuChange={(statu) => {
							if (statu) {
								this.setState({
									front: {
										color: "#000000",
										backgroundColor: last.backgroundColor,
									},
									last: {
										color: "#ffffff",
										backgroundColor: "transparent",
									},
								});
							} else {
								this.setState({
									front: {
										color: "#ffffff",
										backgroundColor: "transparent",
									},
									last: {
										color: "#000000",
										backgroundColor: front.backgroundColor,
									},
								});
							}
						}}
					/>
				</div>

				<button
					onClick={() => {
// @ts-expect-error ts-migrate(2345) FIXME: Type 'null' is not assignable to type 'HTMLElement... Remove this comment to see the full error message
						html2canvas(document.querySelector("#blackborad")).then(
							(canvas) => {
								var base64 = canvas.toDataURL("image/png");
// @ts-expect-error ts-migrate(2345) FIXME: Property 'type' is missing in type '{ file: string... Remove this comment to see the full error message
								saveFile({
									file: base64,
									filename: "ygktool-fake_pornhub_logo.jpg",
								});
							}
						);
					}}
					className="mdui-color-theme mdui-fab mdui-fab-fixed"
				>

					<i className="mdui-icon material-icons">check</i>
				</button>
			</>
		);
	}
}

export default Ui;