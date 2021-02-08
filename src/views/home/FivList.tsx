import React, { useState } from "react";
import { Link } from "react-router-dom";
import fiv from "../../utils/Services/fiv";
import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const AppItem = ({
	data,
	removeFromFiv,
	addToFiv
}: {
	data: AppInfo;
	removeFromFiv: () => void;
	addToFiv: () => void;
}) => {
	const [fiv, setFiv] = useState(true);
	const { name, link } = data;
	const handleClick = () => {
		fiv && removeFromFiv && removeFromFiv();
		!fiv && addToFiv && addToFiv()
		setFiv(!fiv);
	};
	return (
		<Grid item sm={6} xs={12}>
			<ListItem component={Link} to={`/app/${link}`} button key={name}>
				<ListItemIcon onClick={handleClick}>
					{fiv ? <StarIcon /> : <StarBorderIcon />}
				</ListItemIcon>
				<ListItemText primary={name} />
			</ListItem>
		</Grid>
	);
};

/**
 * 收藏列表
 * */
const FivList = () => {
	const [list, ,] = useState(fiv.getAll());
	return (
		<>
			<Paper>
				<List
					aria-labelledby="nested-list-subheader"
					subheader={
						<ListSubheader
							component="div"
							id="nested-list-subheader"
						>
							收藏
						</ListSubheader>
					}
				>
					{!list.length && (
						<Typography variant="h6">
							点击工具菜单中的星型按钮收藏
						</Typography>
					)}
					<Grid container spacing={3}>
						{list.map((app, i) => (
							<AppItem
								data={app}
								addToFiv={()=>{
									fiv.add(app)
								}}
								removeFromFiv={() => {
									fiv.delete(i);
								}}
							/>
						))}
					</Grid>
				</List>
			</Paper>
			<br></br>
		</>
	);
};

export default FivList;
