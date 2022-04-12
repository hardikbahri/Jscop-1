import React from 'react';
import "./Yearwise.css";
import Image from "../Image/Image";

function Yearwise(props) {
	return (
		<div>

			<div class="button_gallery">
				<div class='social-links'>
					<div class='year-btn flex-center' id="year">
						<div></div>
						<span>2018</span>
					</div>

					<div class='year-btn flex-center' id="year">
						<span>2019</span>
					</div>

					<div class='year-btn flex-center' id="year">
						<span>2020</span>
					</div>
				</div>
			</div>

			<div class="gallery">

				<div class="row">

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="2019-1.jpeg" alt="2019-1" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="2019-2.jpeg" alt="2019-1" class="gallery__image" />	
							</figure>
							
							
					</div>

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="2019-3.jpeg" alt="Portrait by Noah Buscher" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="2019-4.jpeg" alt="Portrait by Ivana Cajina" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="2019-5.jpeg" alt="Portrait by Sam Burriss" class="gallery__image" />
							</figure>
					</div>

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="2019-6.jpeg" alt="Portrait by Mari Lezhava" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="2019-7.jpeg" alt="Portrait by Ethan Haddox" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="2019-8.jpeg" alt="Portrait by Amir Geshani" class="gallery__image" />
							</figure>
					</div>

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="2019-9.jpeg" alt="Portrait by Guilian Fremaux" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="2019-10.jpeg" alt="2019-2" class="gallery__image" />
							</figure>
							

					</div>
				</div>
			</div >
		</div>
	);
}

export default Yearwise;