import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import StyledMarkdown from ".//StyledMarkdown";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import axios from "../utils/axios";
import { Theme } from "@mui/material/styles";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		padding: {
			padding: theme.spacing(1),
		},
		closeButton: {
			float: "right",
		},
	})
);

// https://github.com/RiverTwilight/ygktool/issues/21
const API =
	"https://api.github.com/repos/RiverTwilight/ygktool/issues/21/comments?sort=updated";

export default function Board() {
	const [notice, setNotice] =
		useState<{
			content: string;
			id: number;
		} | null>(null);

	const classes = useStyles();

	useEffect(() => {
		axios.get(API).then((res) => {
			let latestIssue = res.data[res.data.length - 1];
			if (latestIssue.id == localStorage.getItem("LATEST_READED_NOTICE"))
				return;
			setNotice({ content: latestIssue.body, id: latestIssue.id });
		});
	}, []);
	if (!!!notice) return null;

	const handleClick = () => {
		localStorage.setItem("LATEST_READED_NOTICE", String(notice.id));
		setNotice(null);
	};

	return (
		<>
			<Card className={classes.padding}>
				<DialogTitle>公告</DialogTitle>
				<DialogContent>
					<StyledMarkdown content={notice.content} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClick}>

					</Button>
				</DialogActions>

				<br />
				<br />
			</Card>
		</>
	);
}
