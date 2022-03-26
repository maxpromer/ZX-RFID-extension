({
    name: "ZX-RFID", // Category Name
    description: "RFID reader Mifare 13.56MHz I2C interface",
    author: "INEX",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "rfid_is_detected",
        "rfid_read_uid"
    ]
});
