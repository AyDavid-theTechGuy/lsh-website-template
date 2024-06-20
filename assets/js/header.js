const header = document.querySelector(".header");

header.innerHTML = `
    <!--NAVIGATION BAR-->
    <nav class="navbar navbar-expand-lg fixed-top my-0 py-0">
        <div class="container-fluid my-0 py-0">
            <a class="navbar-brand" href="https://aydavid-thetechguy.github.io/living-springs-hospital-website-template">
                <img src="./assets/img/lsh1.png"/>
            </a>
            <div class="navbar-responsive">
				<!-- NAVBAR NAV -->
                <ul class="navbar-nav me-0 m-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">HOME</a>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">WHO WE ARE</span>&nbsp;
                            <span class="drop-icon"><i class="bi bi-chevron-down"></i></span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li><a class="submenu-item" href="./about-us.html">About Us</a></li>
                            <li><a class="submenu-item" href="./faq.html">FAQ</a></li>
                            <li><a class="submenu-item" href="./book-appointment.html">Book an Appointment</a></li>
                        </ul>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">
								<a href="./services.html" style="color: #2c65ab">SERVICES</a>
							</span>&nbsp;
                            <span class="drop-icon"><i class="bi bi-chevron-down"></i></span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li>
                                <a class="submenu-item" href="#">Obstetrics & Gynaecology</a>
                            </li>
                            <li><a class="submenu-item" href="#">Paediatrics</a></li>
                            <li><a class="submenu-item" href="#">Orthopaedics</a></li>
                            <li><a class="submenu-item" href="#">Cardiology</a></li>
                            <li><a class="submenu-item" href="#">General Surgery</a></li>
                            <li><a class="submenu-item" href="#">Neurosurgery</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./our-team.html">OUR TEAM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./updates.html">UPDATES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact-us.html">CONTACT US</a>
                    </li>
                </ul>
				<button
					class="btn menu-btn py-2"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#menu"
					aria-controls="menu"
				>
					<img src="./assets/img/menu-icon.svg" />
				</button>

				<!-- OFFCANVAS NAV -->
				<div
					class="offcanvas offcanvas-start offcanvas-nav"
					tabindex="-1"
					id="menu"
					aria-labelledby="menuLabel"
				>
					<div class="offcanvas-header">
						<a href="https://aydavid-thetechguy.github.io/living-springs-hospital-website-template">
							<img src="./assets/img/lsh1.png"/>
						</a>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body">
						<div class="menu-sect">
							<a class="nav-link" href="./index.html">HOME</a>
						</div>
						<div class="submenu">
							<a class="nav-link dropdown-btn" href="#">
								WHO WE ARE &nbsp;<span class="drop-icon"><i class="bi bi-chevron-down"></i></span>
							</a>
							<ul class="dropdown-content m-auto">
								<li>
									<a class="submenu-item" href="./about-us.html">About Us</a>
								</li>
								<li>
									<a class="submenu-item" href="./faq.html">FAQ</a>
								</li>
								<li>
									<a class="submenu-item" href="./book-appointment.html">Book an Appointment</a>
								</li>
							</ul>
						</div>
						<div class="submenu">
							<a class="nav-link dropdown-btn" href="./services.html">
								SERVICES &nbsp;<span class="drop-icon"><i class="bi bi-chevron-down"></i></span>
							</a>
							<ul class="dropdown-content m-auto">
								<li>
									<a class="submenu-item" href="#">Obstetrics & Gynaecology</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Paediatrics</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Orthopaedics</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Cardiology</a>
								</li>
								<li>
									<a class="submenu-item" href="#">General Surgery</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Neurosurgery</a>
								</li>
							</ul>
						</div>
						<div class="menu-sect">
							<a class="nav-link" href="./our-team.html">OUR TEAM</a>
						</div>
						<div class="menu-sect">
							<a class="nav-link" href="./updates.html">UPDATES</a>
						</div>
						<div class="menu-sect">
							<a class="nav-link" href="./contact-us.html">CONTACT US</a>
						</div>
					</div>
				</div>
            </div>
        </div>
    </nav>
    `;
