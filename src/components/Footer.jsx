import React from 'react'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__header'>
					<h2 className='footer__header-title'>Our top cities</h2>
				</div>
				<div className='footer__wrapper'>
					<div className='footer__wrapper-wrapper first'>
						<div className='footer__wrapper-card'>
							<p>San Francisco</p>
							<p>Miami</p>
							<p>San Diego</p>
							<p>East Bay</p>
							<p>Long Beach</p>
						</div>
						<div className='footer__wrapper-card'>
							<p>Los Angeles</p>
							<p>Washington DC</p>
							<p>Seattle</p>
							<p>Portland</p>
							<p>Nashville</p>
						</div>
						<div className='footer__wrapper-card'>
							<p>New York City</p>
							<p>Orange County</p>
							<p>Atlanta</p>
							<p>Charlotte</p>
							<p>Denver</p>
						</div>
						<div className='footer__wrapper-card'>
							<p>Chicago</p>
							<p>Phoenix</p>
							<p>Las Vegas</p>
							<p>Sacramento</p>
							<p>Oklahoma City</p>
						</div>
						<div className='footer__wrapper-card'>
							<p>Columbus</p>
							<p>New Mexico</p>
							<p>Albuquerque</p>
							<p>Sacramento</p>
							<p>New Orleans</p>
						</div>
					</div>
					<div className='footer__wrapper-wrapper second'>
						<div className='footer__card-left'>
							<div className='footer__wrapper-card'>
								<h2>company</h2>
								<p>About us</p>
								<p>Team</p>
								<p>Careers</p>
								<p>Blog</p>
							</div>
							<div className='footer__wrapper-card'>
								<h2>Contact</h2>
								<p>Help & Support</p>
								<p>Partner with us </p>
								<p>Ride with us</p>
							</div>
							<div className='footer__wrapper-card'>
								<h2>Legal</h2>
								<p>Refund & Cancellation</p>
								<p>Privacy Policy</p>
								<p>Cookie Policy</p>
							</div>
						</div>
						<div className='footer__card-right'>
							<div className='footer__right-header'>
								<h2>Follow Us</h2>
							</div>
							<div className='footer__right-social'>
								<img src='img/footer/1.svg' alt='instagram' />
								<img src='img/footer/2.svg' alt='facebook' />
								<img src='img/footer/3.svg' alt='twitter' />
							</div>
							<p>Receive exclusive offers in your mailbox</p>
							<div className='footer__right-form'>
								<div className='footer__right-form_input'>
									<img src='img/icons/mail.svg' alt='' />
									<input type='text' placeholder='Enter Your email' />
								</div>
								<button className='footer__right-button'>subscribe</button>
							</div>
						</div>
					</div>
					<div className='footer__wrapper-wrapper thirt'>
						<div className='footer__wrapper-thirt_left'>
							<h2 className='footer__wrapper-thirt__title copy'>
								All rights Reserved
							</h2>
							<h2 className='copyright'>©</h2>
							<h2 className='footer__wrapper-thirt__subtitle copy'>
								Your Company, 2021
							</h2>
						</div>
						<div className='footer__wrapper-thirt_right items-center copy'>
							<h2>Made with</h2>
							<img
								className='ml-[3px] mr-[3px]'
								src='img/icons/yellow-heart.svg'
								alt='heart'
							/>
							<h2 className='copy'>by</h2>
							<h3 className='copy'>Themewagon</h3>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
