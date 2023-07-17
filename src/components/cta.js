import Image from 'next/image'
import Link from 'next/link'
import Illustration from '../../public/images/cta-illustration.svg'

export default function Cta() {
	return (
		<section className="relative overflow-hidden border-t border-slate-200 dark:border-slate-800 font-aspekta">
			{/* Bg */}
			<div className="absolute inset-0 dark:bg-slate-800/50 pointer-events-none -z-10" aria-hidden="true" />

			{/* Illustration */}
			<div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10 hidden dark:block" aria-hidden="true">
				<Image className="max-w-none" src={Illustration} alt="Illustration" />
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-16">
					<div className="max-w-3xl mx-auto text-center space-y-12">
						<h2 className="h2 font-cabinet-grotesk dark:text-100 mb-6" data-aos="fade-up">
							Do you have a project in mind?
						</h2>
						<div data-aos="fade-up" data-aos-delay="100">
							<Link className="btn inline-flex items-center text-slate-200 dark:text-slate-800 bg-slate-800 hover:bg-slate-700 dark:bg-white dark:hover:bg-slate-100 group" href="mailto:hristo@koev.me">
								Let&apos;s Connect
								<span className="tracking-normal text-sky-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
									<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="8">
										<path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
									</svg>
								</span>
							</Link>
						</div>

						<div className="flex space-x-4 justify-center">
							<div className="group">
								<a href="https://github.com/hristokoev/" className="group-hover:bg-new-500 group-hover:border-slate-700 dark:group-hover:border-slate-500 transition-all flex space-x-4 rounded-xl items-center justify-center" target="_blank">
									<svg className="dark:fill-white dark:hover:fill-slate-200 fill-slate-700 hover:fill-slate-600 group-hover:fill-interface-500" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_537_18858)">
											<path d="M14.4272 32.1624C14.1491 32.2142 14.0276 32.3447 14.0625 32.5529C14.0971 32.7611 14.2534 32.8307 14.5311 32.7611C14.8092 32.6918 14.9306 32.57 14.8957 32.3965C14.8612 32.2057 14.705 32.1275 14.4272 32.1624Z"></path>
											<path d="M12.943 32.3703C12.6652 32.3703 12.5264 32.4652 12.5264 32.6566C12.5264 32.8823 12.674 32.9775 12.969 32.9428C13.2469 32.9428 13.3859 32.8473 13.3859 32.6566C13.3859 32.4312 13.2382 32.3353 12.943 32.3703Z"></path>
											<path d="M10.9119 32.2921C10.8425 32.4831 10.9555 32.613 11.2504 32.6828C11.5108 32.7865 11.6758 32.7346 11.7451 32.5265C11.7973 32.3358 11.6843 32.1972 11.4066 32.1098C11.1461 32.0406 10.9813 32.1005 10.9119 32.2921Z"></path>
											<path d="M37.7994 2.20032C36.3323 0.733532 34.5663 0 32.4999 0H7.49995C5.43417 0 3.66748 0.733532 2.20032 2.20032C0.733532 3.66738 0 5.43408 0 7.49995V32.5002C0 34.5662 0.733532 36.3327 2.20032 37.7995C3.66738 39.2666 5.43417 40.0001 7.49995 40.0001H13.3333C13.7149 40.0001 14.0016 39.987 14.1925 39.9614C14.3833 39.9351 14.5741 39.8222 14.7652 39.6224C14.9564 39.4229 15.0516 39.132 15.0516 38.7502C15.0516 38.6984 15.0471 38.1075 15.0385 36.9791C15.0296 35.8504 15.0254 34.9564 15.0254 34.2966L14.4264 34.4008C14.0445 34.4701 13.5627 34.5007 12.981 34.4919C12.3996 34.4832 11.7962 34.4226 11.1713 34.3097C10.546 34.1967 9.96461 33.9364 9.42636 33.5287C8.88839 33.1204 8.50649 32.5867 8.28073 31.9271L8.02023 31.3278C7.84665 30.9289 7.57338 30.486 7.20005 30.0003C6.82671 29.5139 6.44919 29.184 6.06728 29.0104L5.88494 28.8802C5.76354 28.7934 5.65071 28.6888 5.54645 28.5674C5.44238 28.4456 5.3643 28.324 5.31222 28.2028C5.26014 28.0811 5.30337 27.9812 5.44238 27.9028C5.58139 27.8249 5.83286 27.7862 6.19762 27.7862L6.71826 27.8642C7.0656 27.9335 7.49503 28.1416 8.00746 28.4891C8.51953 28.8362 8.94047 29.2875 9.27039 29.8429C9.6699 30.5549 10.1512 31.0971 10.7157 31.4704C11.2798 31.8441 11.8485 32.0308 12.4213 32.0308C12.9941 32.0308 13.4889 31.9873 13.9057 31.9009C14.3221 31.8139 14.7128 31.6833 15.0775 31.5098C15.2338 30.3467 15.6592 29.4521 16.3534 28.8272C15.3639 28.7229 14.4743 28.5669 13.6841 28.3584C12.8944 28.1498 12.0783 27.8115 11.2364 27.3426C10.3941 26.8738 9.69544 26.2926 9.13987 25.5977C8.58438 24.9029 8.1285 23.9915 7.77286 22.8633C7.41704 21.7346 7.23909 20.4323 7.23909 18.9568C7.23909 16.8563 7.9251 15.0678 9.29657 13.5922C8.65407 12.0124 8.71472 10.2418 9.47872 8.27982C9.98221 8.12348 10.7289 8.24078 11.7184 8.63145C12.708 9.02238 13.4326 9.35668 13.8929 9.63406C14.3531 9.91152 14.7219 10.1461 14.9997 10.3373C16.6146 9.88589 18.2812 9.66023 19.9998 9.66023C21.7184 9.66023 23.3852 9.88589 25.0002 10.3373L25.9897 9.71232C26.6671 9.29547 27.4656 8.91357 28.3858 8.5665C29.306 8.21935 30.0089 8.12376 30.4953 8.2801C31.2762 10.2421 31.3461 12.0127 30.7032 13.5924C32.0746 15.0681 32.7608 16.8565 32.7608 18.9571C32.7608 20.4329 32.5829 21.7395 32.227 22.8764C31.8715 24.0135 31.4117 24.9253 30.847 25.611C30.2829 26.2969 29.5797 26.8737 28.7378 27.3428C27.8957 27.8114 27.0797 28.1503 26.2897 28.3582C25.4997 28.5667 24.6101 28.7234 23.6205 28.8276C24.5227 29.6086 24.974 30.8409 24.974 32.5252V38.7494C24.974 39.0446 25.0171 39.2832 25.1039 39.4655C25.1913 39.6477 25.3299 39.7732 25.5208 39.8432C25.7126 39.9125 25.881 39.9559 26.029 39.9731C26.1769 39.9905 26.3892 39.9993 26.667 39.9993H32.5003C34.5661 39.9993 36.3329 39.2657 37.7993 37.7987C39.2664 36.3316 39.9999 34.5648 39.9999 32.499V7.49995C39.9997 5.43408 39.2662 3.66711 37.7994 2.20032Z"></path>
											<path d="M7.91658 29.1155C7.79517 29.202 7.8125 29.3409 7.96875 29.5319C8.1426 29.7054 8.28134 29.7315 8.38559 29.6099C8.507 29.5234 8.48967 29.3845 8.33315 29.1931C8.15966 29.0371 8.02083 29.011 7.91658 29.1155Z"></path>
											<path d="M7.05753 28.4626C7.00554 28.5844 7.06629 28.6886 7.23987 28.7751C7.3786 28.8622 7.4918 28.8451 7.57836 28.7233C7.63035 28.6015 7.5696 28.4973 7.39602 28.4102C7.22244 28.358 7.10961 28.3755 7.05753 28.4626Z"></path>
											<path d="M8.72426 30.1304C8.56783 30.2169 8.56783 30.3736 8.72426 30.599C8.8805 30.825 9.02781 30.8856 9.16691 30.7812C9.32325 30.6596 9.32325 30.4946 9.16691 30.2862C9.02818 30.0611 8.8805 30.0084 8.72426 30.1304Z"></path>
											<path d="M9.63557 31.3014C9.47923 31.4406 9.51371 31.6049 9.73973 31.7965C9.94779 32.0044 10.1215 32.0306 10.2604 31.8739C10.3994 31.7354 10.3646 31.5706 10.1562 31.3796C9.94815 31.1716 9.77448 31.1453 9.63557 31.3014Z"></path>
										</g>
										<defs>
											<clipPath id="clip0_537_18858">
												<rect width="40" height="40"></rect>
											</clipPath>
										</defs>
									</svg>
								</a>
							</div>
							<div className="group">
								<a href="https://www.linkedin.com/in/hristo-koev/" className="group-hover:bg-new-500 group-hover:border-slate-700 dark:group-hover:border-slate-500 transition-all flex space-x-4 rounded-xl items-center justify-center" target="_blank">
									<svg className="dark:fill-white dark:hover:fill-slate-200 fill-slate-700 hover:fill-slate-600 group-hover:fill-interface-100" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_537_18883)">
											<path d="M34.5455 0H5.45455C4.00791 0 2.62053 0.574674 1.5976 1.5976C0.574674 2.62053 0 4.00791 0 5.45455L0 34.5455C0 35.9921 0.574674 37.3795 1.5976 38.4024C2.62053 39.4253 4.00791 40 5.45455 40H34.5455C35.9921 40 37.3795 39.4253 38.4024 38.4024C39.4253 37.3795 40 35.9921 40 34.5455V5.45455C40 4.00791 39.4253 2.62053 38.4024 1.5976C37.3795 0.574674 35.9921 0 34.5455 0ZM13.6364 31.6545C13.6367 31.7655 13.6151 31.8754 13.5728 31.9779C13.5306 32.0805 13.4685 32.1737 13.3902 32.2522C13.3119 32.3308 13.2188 32.3931 13.1164 32.4356C13.0139 32.4781 12.9041 32.5 12.7932 32.5H9.2C9.08889 32.5003 8.97882 32.4786 8.8761 32.4363C8.77339 32.3939 8.68007 32.3316 8.6015 32.253C8.52294 32.1745 8.46067 32.0812 8.41829 31.9784C8.37591 31.8757 8.35425 31.7657 8.35455 31.6545V16.5909C8.35455 16.3667 8.44362 16.1516 8.60217 15.9931C8.76073 15.8345 8.97577 15.7455 9.2 15.7455H12.7932C13.017 15.7461 13.2315 15.8354 13.3895 15.9939C13.5476 16.1524 13.6364 16.3671 13.6364 16.5909V31.6545ZM10.9955 14.3182C10.3212 14.3182 9.66209 14.1182 9.10147 13.7436C8.54084 13.3691 8.10389 12.8366 7.84587 12.2137C7.58784 11.5908 7.52033 10.9053 7.65187 10.244C7.78341 9.58271 8.10809 8.97527 8.58486 8.4985C9.06163 8.02173 9.66908 7.69705 10.3304 7.5655C10.9917 7.43396 11.6771 7.50148 12.3001 7.7595C12.923 8.01753 13.4554 8.45448 13.83 9.0151C14.2046 9.57572 14.4045 10.2348 14.4045 10.9091C14.4045 11.8132 14.0454 12.6804 13.406 13.3197C12.7667 13.959 11.8996 14.3182 10.9955 14.3182ZM32.4182 31.7136C32.4185 31.8158 32.3986 31.917 32.3596 32.0114C32.3207 32.1059 32.2634 32.1917 32.1912 32.2639C32.119 32.3362 32.0332 32.3934 31.9387 32.4324C31.8443 32.4713 31.7431 32.4912 31.6409 32.4909H27.7773C27.6751 32.4912 27.5739 32.4713 27.4795 32.4324C27.385 32.3934 27.2992 32.3362 27.227 32.2639C27.1548 32.1917 27.0975 32.1059 27.0586 32.0114C27.0196 31.917 26.9997 31.8158 27 31.7136V24.6568C27 23.6023 27.3091 20.0386 24.2432 20.0386C21.8682 20.0386 21.3841 22.4773 21.2886 23.5727V31.7227C21.2887 31.9269 21.2083 32.1229 21.065 32.2684C20.9217 32.4138 20.7269 32.497 20.5227 32.5H16.7909C16.6889 32.5 16.588 32.4799 16.4938 32.4408C16.3996 32.4017 16.3141 32.3444 16.2421 32.2722C16.1701 32.2 16.1131 32.1143 16.0742 32.02C16.0354 31.9257 16.0156 31.8247 16.0159 31.7227V16.525C16.0156 16.423 16.0354 16.322 16.0742 16.2277C16.1131 16.1334 16.1701 16.0477 16.2421 15.9755C16.3141 15.9033 16.3996 15.846 16.4938 15.8069C16.588 15.7678 16.6889 15.7477 16.7909 15.7477H20.5227C20.7289 15.7477 20.9266 15.8296 21.0723 15.9754C21.2181 16.1212 21.3 16.3189 21.3 16.525V17.8386C22.1818 16.5136 23.4886 15.4955 26.2773 15.4955C32.4545 15.4955 32.4136 21.2636 32.4136 24.4318L32.4182 31.7136Z"></path>
										</g>
										<defs>
											<clipPath id="clip0_537_18883">
												<rect width="40" height="40"></rect>
											</clipPath>
										</defs>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}