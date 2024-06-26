import avatarImg from '../../assets/avatar.jpeg';
import styles from './Profile.module.css';

export default function Profile() {
	return (
		<div className={styles.profile}>
			<img src={avatarImg} width={80} height={80} alt="Jessica Randall" />
			<div className={styles['title-box']}>
				<h2>Jessica Randall</h2>
				<p>London, United Kingdom</p>
			</div>
			<p>&Prime;Front-end developer and avid reader.&Prime;</p>
			<ul className={styles['social-links']}>
				<li>
					<a
						href="#"
						className="btn btn--primary btn--full"
						rel="noopener"
						target="_blank"
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						href="#"
						className="btn btn--primary btn--full"
						rel="noopener"
						target="_blank"
					>
						Frontend Mentor
					</a>
				</li>
				<li>
					<a
						href="#"
						className="btn btn--primary btn--full"
						rel="noopener"
						target="_blank"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href="#"
						className="btn btn--primary btn--full"
						rel="noopener"
						target="_blank"
					>
						Twitter
					</a>
				</li>
				<li>
					<a
						href="#"
						className="btn btn--primary btn--full"
						rel="noopener"
						target="_blank"
					>
						Instagram
					</a>
				</li>
			</ul>
		</div>
	);
}
