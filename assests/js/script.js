/*      Custom Script       */
// localStorage.setItem

var sideBar = `<div class="p-md-2 px-4 py-3 " id="dashboard-brand">
<a href="dashboard.html"><img src="assests/img/logo-dark.png" width="60px" alt=""></a>
<button class="btn toggler-btn">
    <i class="fas fa-bars"></i>
</button>
</div>
<!-- Sidebar Nav -->
<div class="" id="side-Nav">
<a class="" href="index.html"><i class="fas fa-chart-pie"></i>Overview</a>
<a href="area.html"><i class="fas fa-desktop"></i>Area</a>
<a href="company.html"><i class="fas fa-desktop"></i>Company</a>
<a href="expense.html"><i class="fas fa-book-open"></i>Expense</a>
<a href="expense-report.html"><i class="fas fa-book-open"></i>Expense Report</a>
<a href="package.html"><i class="fas fa-briefcase"></i>Package</a>
<a href="product.html"><i class="fas fa-briefcase"></i>Product</a>
<a href="other-product.html"><i class="fas fa-briefcase"></i>Other Product</a>
<a href="sale.html"><i class="fas fa-briefcase"></i>Sale</a>
<a href="monthly-invoice.html"><i class="fas fa-lightbulb"></i>Monthly Invoice</a>
<a href="payment-collection.html"><i class="fas fa-lightbulb"></i>Payment Collection</a>
<a href="sale-report.html"><i class="fas fa-bullhorn"></i>Sale Report</a>
<a href="customer.html"><i class="fas fa-users"></i>Customers</a>
</div>`;
document.getElementById('side-bar').innerHTML = sideBar;

$(document).ready(function() {

    // Disabling to Drag Image from HTML Page
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    $('#dashboard-section .toggler-btn').click(function() {
        $('#side-Nav').slideToggle();
    });

    //Sidebar Toggle Button for side bar hide /show

    $(document).ready(function() {
        $('#sidebar-btn').click(function() {
            $('#my-sidebar').toggleClass('d-none');
            $('#mydashboard-content').toggleClass('col-lg-12');
        });


    });

});