import { h } from 'preact';
import style from './style';
import Video from '../../components/video/video.js';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Hello.</h1>
			<p>Enable your audio and video to begin.</p>
			<div class={style.formWrapper}>
				<Video />
			</div>
		</div>
	);
};

export default photographs;

