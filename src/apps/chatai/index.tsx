import React, { useState, useEffect } from "react";
import ClipboardJS from "clipboard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "@/utils/axios";
import useInput from "@/utils/Hooks/useInput";
import { styled } from "@mui/material/styles";

const SenderBubble = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	padding: theme.spacing(1),
	borderRadius: "20px 20px 2px 20px",
	margin: theme.spacing(1),
	maxWidth: "80%",
	marginLeft: "auto",
	textAlign: "right",
	wordBreak: "break-all",
	wordWrap: "break-word",
	overflowWrap: "break-word",
	hyphens: "auto",
}));

const ContactBubble = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.secondary[theme.palette.mode],
	color: theme.palette.mode === "dark" ? "#FFF" : theme.palette.primary.contrastText,
	padding: theme.spacing(1),
	borderRadius: "20px 20px 20px 2px",
	margin: theme.spacing(1),
	maxWidth: "80%",
	textAlign: "left",
	wordBreak: "break-all",
	wordWrap: "break-word",
	overflowWrap: "break-word",
	hyphens: "auto",
}));

const ChatItemWarpper = styled("div")(({ theme }) => ({
	display: "flex",
}));

export default function Chat() {
	const [history, setHistory] = useState([]);
	const [input, setInput] = useInput<String>("");
	const [loading, setLoading] = useState(false);

	const handleSend = () => {
		setHistory((prevHistory) => [
			...prevHistory,
			{
				type: "human",
				text: input,
				date: new Date(),
			},
		]);
		setInput("");
		setLoading(true);
		axios
			.post("/api/apps/openai", {
				packedData: {
					model: "text-davinci-003",
					prompt: input,
					temperature: 0.9,
					max_tokens: 200,
					top_p: 1,
					n: 1,
					stream: false,
					logprobs: null,
					stop: ["\u2022"],
				},
			})
			.then((res) => {
				setHistory((prevHistory) => [
					...prevHistory,
					{
						type: "bot",
						text: res.data.choices[0].text,
						date: new Date(),
					},
				]);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		var clipboard = new ClipboardJS(".copy");
		clipboard.on("success", (e) => {
			window.snackbar({ message: "已复制" });
			e.clearSelection();
		});
		return () => clipboard && clipboard.destroy();
	}, []);

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "calc(100vh - 110px)",
					position: "relative",
				}}
				paddingY={2}
				paddingX={1}
			>
				<Box
					sx={{
						marginBottom: "10px",
						paddingBottom: "60px",
						"&::-webkit-scrollbar": { display: "none" },
						overflowY: "scroll",
						height: "100%",
					}}
				>
					{!!!history.length ? (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								height: "inherit",
							}}
						>
							<div className="center-with-flex">
								<img
									height="130"
									width="130"
									src="/illustration/undraw_share_opinion_re_4qk7.svg"
								/>
								<Typography align="center" variant="subtitle1">
									聊天，提问，抑或是请求帮助
									<br />
									更多玩法等你探索
								</Typography>
							</div>
						</Box>
					) : (
						history.map((chat, i) => {
							return (
								<ChatItemWarpper key={chat.date.toString()}>
									{chat.type === "bot" ? (
										<ContactBubble>
											<Typography
												color={(theme) => theme.pla}
												variant="body1"
											>
												{chat.text}
											</Typography>
										</ContactBubble>
									) : (
										<SenderBubble>
											<Typography variant="body1">
												{chat.text}
											</Typography>
										</SenderBubble>
									)}
								</ChatItemWarpper>
							);
						})
					)}
					{loading && (
						<Typography
							className="shakingText"
							align="center"
							variant="subtitle1"
						>
							对方正在输入...
						</Typography>
					)}
				</Box>
				<Paper
					component="form"
					sx={{
						p: "6px 4px",
						display: "flex",
						alignItems: "center",
						width: "100%",
						position: "absolute",
						bottom: 10,
						left: 0,
					}}
				>
					<IconButton sx={{ p: "10px" }} aria-label="menu">
						<MenuIcon />
					</IconButton>
					<InputBase
						sx={{
							ml: 1,
							mr: 1,
							flex: 1,
							background: (theme) =>
								theme.palette.secondary[theme.palette.mode],
							borderRadius: "5px",
							pl: 1,
						}}
						multiline
						placeholder="Say anything you want..."
						autoComplete="off"
						type="search"
						aria-label="Type the search keywords here"
						value={input}
						onChange={setInput}
						inputProps={{ "aria-label": "Say something" }}
					/>
					<IconButton
						sx={{
							backgroundColor: (theme) =>
								theme.palette.primary.main,
						}}
						size="small"
						disabled={input === ""}
						onClick={handleSend}
					>
						<ArrowUpwardIcon />
					</IconButton>
				</Paper>
			</Box>
		</>
	);
}
