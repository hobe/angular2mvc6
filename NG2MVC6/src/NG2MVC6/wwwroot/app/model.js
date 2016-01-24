var Shipment = (function () {
    function Shipment(id, origin, destination, shippedDate) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.shippedDate = shippedDate;
    }
    return Shipment;
})();
exports.Shipment = Shipment;
