import React, { useState } from "react";
import { useRouter } from "next/router";
import useEventListener from "../utils/Hooks/useEventListener";
import pinyin from "js-pinyin";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Link from "@mui/material/Link";
import { AppListItem } from "./AppList";

const styles = (theme: Theme) => {
	return createStyles({
		padding: {
			padding: theme.spacing(1),
		},
	});
};

/**
 * 搜索结果
 */
const SearchResult = ({ result = [], kwd }: any) => {
	if (kwd === "") return null;

	const handleKeydown = (e: any) => {
		if (e.keyCode === 38 || e.keyCode === 40) {
			e.preventDefault();
			setSelectedItem(
				e.keyCode === 38 ? selectedItem - 1 : selectedItem + 1
			);
		} else if (e.keyCode === 13) {
			e.preventDefault();
			handleClick(`/app/${result[selectedItem].link}`);
		}
	};

	const [selectedItem, setSelectedItem] = useState(-1);

	let history = useRouter();
	function handleClick(url: any) {
		history.push(url);
	}

	useEventListener("keydown", handleKeydown);

	return (
		<>
			{!!result.length ? (
				result.map((a: any, i: number) => (
					<AppListItem
						selected={selectedItem === i}
						key={a.link + a.icon}
						{...a}
					/>
				))
			) : (
				<Typography align="center" variant="subtitle1">
					搜索无结果
				</Typography>
			)}

			<Typography align="center" variant="subtitle1" gutterBottom>
				没找到想要的工具?试试
				<Link href={"https://www.google.com/search?q=" + kwd}>
					谷歌搜索
				</Link>
			</Typography>
		</>
	);
};

type SearchState = any;

const debounce = (func, timeout = 300) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};

class Search extends React.Component<any, SearchState> {
	searchInput: any;
	searchRes: any;
	timer: NodeJS.Timeout;
	constructor(props: {}) {
		super(props);
		this.state = {
			kwd: "",
			searchResult: [],
		};
		this.searchRes = debounce(() => {
			console.log(123);
			this.search();
		}, 500);
	}

	handleSearchKeydown(e: KeyboardEvent) {
		if (e.ctrlKey && e.keyCode === 70) {
			e.preventDefault();
			this.searchInput && this.searchInput.focus();
		}
	}
	componentDidMount() {
		pinyin.setOptions({ checkPolyphone: false, charCase: 0 });
		document.addEventListener(
			"keydown",
			this.handleSearchKeydown.bind(this)
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			"keydown",
			this.handleSearchKeydown.bind(this)
		);
	}

	handleChange = (e: { target: { value: any } }) => {
		const {
			target: { value },
		} = e;

		this.setState({ kwd: value });

		this.searchRes();
	};

	search() {
		const { kwd } = this.state;
		const { appData } = this.props;
		const res = appData.filter((app) => {
			let keyword = kwd.toLowerCase().trim();
			return (
				(pinyin
					.getFullChars(app.name)
					.toLowerCase()
					.indexOf(keyword) !== -1 ||
					app.name.toLowerCase().indexOf(keyword) !== -1) &&
				kwd !== ""
			);
		});
		this.setState({
			searchResult: res || [],
		});
		// console.log(res);
	}

	render() {
		const { kwd, searchResult } = this.state;
		const { classes } = this.props;
		return (
			<Paper className={classes.padding}>
				<FormControl fullWidth>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchSharpIcon />
								</InputAdornment>
							),
						}}
						inputRef={(ref) => (this.searchInput = ref)}
						autoComplete="off"
						id="search"
						value={kwd}
						variant="outlined"
						onChange={this.handleChange}
						label="搜索（Ctrl+F）"
					/>
				</FormControl>
				<SearchResult kwd={kwd} result={searchResult} />
			</Paper>
		);
	}
}

export default withStyles(styles)(Search);
