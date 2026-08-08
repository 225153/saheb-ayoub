/* ==========================================================================
   Velvet Pearl Boutique — Script / Product Engine
   ========================================================================== */

// Sample Catalog matching "Ethereal Dark Shop" & Velvet Pearl Boutique theme
const productCatalog = [
  {
    id: "vp-001",
    title: "Luminous Baroque Pearl Drop Earrings",
    category: "jewelry",
    categoryName: "Pearl Jewelry",
    price: 340,
    oldPrice: 410,
    isSale: true,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description:
      "Hand-selected Tahitian baroque pearls suspended from 18k solid gold studs. Naturally shaped with high iridescent luster.",
  },
  {
    id: "vp-002",
    title: "Tailored Soft Sage Velvet Blazer",
    category: "tailored",
    categoryName: "Tailored Blazers",
    price: 580,
    oldPrice: null,
    isSale: false,
    image:
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80",
    description:
      "Structured double-breasted velvet blazer in botanical soft sage. Fully silk-lined with genuine mother-of-pearl buttons.",
  },
  {
    id: "vp-003",
    title: "Midnight Silk Slip Dress with Pearl Trim",
    category: "silk",
    categoryName: "Silk & Satin",
    price: 460,
    oldPrice: 520,
    isSale: true,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description:
      "Heavyweight 100% Mulberry silk slip dress in dark carbon. Delicate freshwater pearl embellishments along the back tie.",
  },
  {
    id: "vp-004",
    title: "Golden South Sea Pearl Pendant Necklace",
    category: "jewelry",
    categoryName: "Pearl Jewelry",
    price: 890,
    oldPrice: null,
    isSale: false,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description:
      "A rare 12mm deep golden South Sea pearl on a whisper-thin 18k yellow gold snake chain. Unmatched natural shine.",
  },
  {
    id: "vp-005",
    title: "Plush Velvet Tote Bag in Carbon",
    category: "accessories",
    categoryName: "Accessories",
    price: 290,
    oldPrice: null,
    isSale: false,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description:
      "Spacious luxury velvet tote with suede interior padding and magnetic clasp with embedded seed pearl accents.",
  },
  {
    id: "vp-006",
    title: "Soft Sage Silk Wrap Blouse",
    category: "silk",
    categoryName: "Silk & Satin",
    price: 320,
    oldPrice: 380,
    isSale: true,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description:
      "Ethereal wrap shirt cut from liquid-satin silk in soft sage. Drapes gracefully with relaxed dropped shoulders.",
  },
  {
    id: "vp-007",
    title: "Organic Luster Pearl Care Kit",
    category: "care",
    categoryName: "Pearl Care",
    price: 85,
    oldPrice: null,
    isSale: false,
    image:
      "https://images.unsplash.com/photo-1608248597266-c89d81d2938a?auto=format&fit=crop&w=800&q=80",
    description:
      "Specialized gentle microfiber chamois, organic botanical oil elixir, and plush travel pouch to maintain natural luster.",
  },
  {
    id: "vp-008",
    title: "Double-Strand Baroque Pearl Choker",
    category: "jewelry",
    categoryName: "Pearl Jewelry",
    price: 1120,
    oldPrice: 1300,
    isSale: true,
    image:
      "https://images.unsplash.com/photo-1611591475155-4284140026e9?auto=format&fit=crop&w=800&q=80",
    description:
      "Statement dual-row necklace featuring matched organic baroque pearls. Fitted with a bespoke vintage gold lock.",
  },
];

// State Store
let state = {
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  gridCols: 2,
  wishlist: new Set(["vp-001"]),
  cart: [
    { id: "vp-001", qty: 1, finish: "Soft Sage" },
    { id: "vp-002", qty: 1, finish: "Carbon Black" },
  ],
  selectedModalProduct: null,
};

// DOM Selectors
const productGrid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const filterPills = document.getElementById("filter-pills");
const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("live-search-input");
const searchOverlay = document.getElementById("search-overlay");
const searchToggleBtn = document.getElementById("search-toggle-btn");
const clearSearchBtn = document.getElementById("clear-search");

const wishlistCount = document.getElementById("wishlist-count");
const cartCount = document.getElementById("cart-count");
const cartDrawer = document.getElementById("cart-drawer");
const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartSubtotal = document.getElementById("cart-subtotal");
const checkoutTotal = document.getElementById("checkout-total");

const quickViewModal = document.getElementById("quick-view-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const toastContainer = document.getElementById("toast-container");

// View Switchers
const viewGrid1 = document.getElementById("view-grid-1");
const viewGrid2 = document.getElementById("view-grid-2");

// Mobile Nav
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const closeMobileNav = document.getElementById("close-mobile-nav");

/* --------------------------------------------------------------------------
   Initialization
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  updateHeaderBadges();
  setupEventListeners();
});

/* --------------------------------------------------------------------------
   Core Rendering Logic
   -------------------------------------------------------------------------- */
function getFilteredProducts() {
  return productCatalog
    .filter((product) => {
      const matchesCategory =
        state.activeCategory === "all" ||
        product.category === state.activeCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.categoryName
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (state.sortBy === "price-low") return a.price - b.price;
      if (state.sortBy === "price-high") return b.price - a.price;
      if (state.sortBy === "newest") return b.id.localeCompare(a.id);
      return 0; // 'featured' default order
    });
}

function renderGrid() {
  const products = getFilteredProducts();

  // Update count string
  resultsCount.textContent = `Showing ${products.length} Curated Masterpiece${products.length !== 1 ? "s" : ""}`;

  if (products.length === 0) {
    productGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  productGrid.innerHTML = products
    .map((product) => {
      const isWishlisted = state.wishlist.has(product.id);
      return `
            <article class="product-card" data-id="${product.id}">
                <div class="card-image-wrapper">
                    ${product.isSale ? `<span class="badge-sale">SALE</span>` : ""}
                    <button class="wishlist-card-btn ${isWishlisted ? "active" : ""}" 
                            aria-label="Toggle Wishlist" 
                            onclick="toggleWishlist('${product.id}', event)">
                        <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i>
                    </button>
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <div class="quick-add-overlay">
                        <button class="btn btn-primary btn-sm flex-1" onclick="openQuickView('${product.id}', event)">
                            <i class="fa-solid fa-eye"></i> Quick View
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="quickAddToCart('${product.id}', event)" title="Quick Add">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-details" onclick="openQuickView('${product.id}', event)">
                    <span class="card-category">${product.categoryName}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <div class="card-price-row">
                        <span class="card-price">$${product.price}</span>
                        ${product.oldPrice ? `<span class="card-old-price">$${product.oldPrice}</span>` : ""}
                    </div>
                </div>
            </article>
        `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   Wishlist & Cart Actions
   -------------------------------------------------------------------------- */
window.toggleWishlist = function (productId, e) {
  if (e) e.stopPropagation();
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast("Item removed from your wishlist.");
  } else {
    state.wishlist.add(productId);
    showToast("Item saved to your wishlist.");
  }
  updateHeaderBadges();
  renderGrid();
};

window.quickAddToCart = function (productId, e) {
  if (e) e.stopPropagation();
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1, finish: "Soft Sage" });
  }
  updateHeaderBadges();
  renderCartDrawer();
  showToast("Added to your shopping bag.");
};

function updateHeaderBadges() {
  wishlistCount.textContent = state.wishlist.size;
  const totalCartQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalCartQty < 10 ? `0${totalCartQty}` : totalCartQty;
}

/* --------------------------------------------------------------------------
   Quick View Modal
   -------------------------------------------------------------------------- */
window.openQuickView = function (productId, e) {
  if (e) e.stopPropagation();
  const product = productCatalog.find((p) => p.id === productId);
  if (!product) return;

  state.selectedModalProduct = product;

  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-category").textContent = product.categoryName;
  document.getElementById("modal-title").textContent = product.title;
  document.getElementById("modal-price").textContent = `$${product.price}`;
  document.getElementById("modal-desc").textContent = product.description;
  document.getElementById("modal-qty-val").textContent = "1";

  const saleBadge = document.getElementById("modal-badge");
  if (product.isSale) {
    saleBadge.classList.remove("hidden");
  } else {
    saleBadge.classList.add("hidden");
  }

  quickViewModal.classList.remove("hidden");
};

function closeQuickView() {
  quickViewModal.classList.add("hidden");
}

/* Modal Qty Controls */
let modalQty = 1;
document.getElementById("modal-qty-minus")?.addEventListener("click", () => {
  if (modalQty > 1) {
    modalQty--;
    document.getElementById("modal-qty-val").textContent = modalQty;
  }
});
document.getElementById("modal-qty-plus")?.addEventListener("click", () => {
  modalQty++;
  document.getElementById("modal-qty-val").textContent = modalQty;
});

document
  .getElementById("modal-add-to-cart-btn")
  ?.addEventListener("click", () => {
    if (!state.selectedModalProduct) return;
    const existing = state.cart.find(
      (item) => item.id === state.selectedModalProduct.id,
    );
    if (existing) {
      existing.qty += modalQty;
    } else {
      state.cart.push({
        id: state.selectedModalProduct.id,
        qty: modalQty,
        finish: "Soft Sage",
      });
    }
    updateHeaderBadges();
    closeQuickView();
    renderCartDrawer();
    openCartDrawer();
    showToast(`Added ${modalQty} piece(s) to bag.`);
    modalQty = 1;
  });

/* --------------------------------------------------------------------------
   Shopping Cart Drawer Logic
   -------------------------------------------------------------------------- */
function renderCartDrawer() {
  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-state" style="margin: 20px 0;">
                <i class="fa-solid fa-bag-shopping empty-icon"></i>
                <p class="body-md text-muted">Your shopping bag is currently empty.</p>
            </div>
        `;
    cartSubtotal.textContent = "$0.00";
    checkoutTotal.textContent = "$0.00";
    return;
  }

  let subtotal = 0;

  cartItemsContainer.innerHTML = state.cart
    .map((item) => {
      const product = productCatalog.find((p) => p.id === item.id);
      if (!product) return "";
      const itemTotal = product.price * item.qty;
      subtotal += itemTotal;

      return `
            <div class="cart-item">
                <img src="${product.image}" class="cart-item-img" alt="${product.title}">
                <div class="cart-item-details">
                    <span class="cart-item-title">${product.title}</span>
                    <span class="label-sm text-sage">${item.finish}</span>
                    <span class="cart-item-price">$${product.price} &times; ${item.qty}</span>
                    <div class="cart-item-controls">
                        <span class="body-md text-flour">$${itemTotal}</span>
                        <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">
                            <i class="fa-solid fa-trash-can"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  cartSubtotal.textContent = `$${subtotal}`;
  checkoutTotal.textContent = `$${subtotal}`;
}

window.removeFromCart = function (productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  updateHeaderBadges();
  renderCartDrawer();
  showToast("Item removed from bag.");
};

function openCartDrawer() {
  renderCartDrawer();
  cartDrawer.classList.add("active");
  cartDrawerOverlay.classList.remove("hidden");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("active");
  cartDrawerOverlay.classList.add("hidden");
}

/* --------------------------------------------------------------------------
   Toast Messages
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-sparkles text-sage"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* --------------------------------------------------------------------------
   Event Listeners
   -------------------------------------------------------------------------- */
function setupEventListeners() {
  // Filter Pills
  filterPills?.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn) return;

    filterPills
      .querySelectorAll(".pill-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    state.activeCategory = btn.dataset.category;
    renderGrid();
  });

  // Sort Dropdown
  sortSelect?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderGrid();
  });

  // Live Search
  searchToggleBtn?.addEventListener("click", () => {
    searchOverlay.classList.toggle("active");
    if (searchOverlay.classList.contains("active")) {
      searchInput.focus();
    }
  });

  clearSearchBtn?.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    renderGrid();
  });

  searchInput?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderGrid();
  });

  // View Switcher (1 col vs 2/4 col)
  viewGrid1?.addEventListener("click", () => {
    viewGrid1.classList.add("active");
    viewGrid2.classList.remove("active");
    productGrid.classList.remove("grid-2-col");
    productGrid.classList.add("grid-1-col");
  });

  viewGrid2?.addEventListener("click", () => {
    viewGrid2.classList.add("active");
    viewGrid1.classList.remove("active");
    productGrid.classList.remove("grid-1-col");
    productGrid.classList.add("grid-2-col");
  });

  // Cart Drawer Toggles
  cartBtn?.addEventListener("click", openCartDrawer);
  closeCartBtn?.addEventListener("click", closeCartDrawer);
  cartDrawerOverlay?.addEventListener("click", closeCartDrawer);

  // Modal Close
  closeModalBtn?.addEventListener("click", closeQuickView);
  quickViewModal?.addEventListener("click", (e) => {
    if (e.target === quickViewModal) closeQuickView();
  });

  // Mobile Navigation Drawer
  mobileMenuToggle?.addEventListener("click", () => {
    mobileNavDrawer.classList.add("active");
    mobileNavOverlay.classList.add("active");
  });

  closeMobileNav?.addEventListener("click", () => {
    mobileNavDrawer.classList.remove("active");
    mobileNavOverlay.classList.remove("active");
  });

  mobileNavOverlay?.addEventListener("click", () => {
    mobileNavDrawer.classList.remove("active");
    mobileNavOverlay.classList.remove("active");
  });

  // Reset Filters Button on empty state
  document.getElementById("reset-filter-btn")?.addEventListener("click", () => {
    state.activeCategory = "all";
    state.searchQuery = "";
    if (searchInput) searchInput.value = "";
    filterPills.querySelectorAll(".pill-btn").forEach((b, idx) => {
      if (idx === 0) b.classList.add("active");
      else b.classList.remove("active");
    });
    renderGrid();
  });

  // Newsletter Form
  document
    .getElementById("newsletter-form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you for joining our private atelier list.");
      e.target.reset();
    });
}
