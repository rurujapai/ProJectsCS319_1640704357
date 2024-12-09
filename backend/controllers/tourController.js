const { Tour, Destination } = require('../models/Tour');

// Get all tours
exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.findAll({ include: 'destinations' });
    res.json({ status: 200, data: tours, message: 'Tours fetched successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Server Error', data: null });
  }
};

// Create a new tour
exports.createTour = async (req, res) => {
  try {
    const { name, description, startDate, endDate, destinations } = req.body;
    const newTour = await Tour.create(
      { name, description, startDate, endDate, destinations },
      { include: 'destinations' }
    );
    res.json({ status: 200, data: newTour, message: 'Tour created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Server Error', data: null });
  }
};

// Get a single tour by ID
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id, { include: 'destinations' });
    if (!tour) {
      return res.status(404).json({ status: 404, message: 'Tour not found', data: null });
    }
    res.json({ status: 200, data: tour, message: 'Tour fetched successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Server Error', data: null });
  }
};

// Update a tour
exports.updateTour = async (req, res) => {
  try {
    const { name, description, startDate, endDate, destinations } = req.body;
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ status: 404, message: 'Tour not found', data: null });
    }

    await tour.update({ name, description, startDate, endDate });

    // Update destinations
    await Destination.destroy({ where: { tourId: tour.id } });
    await Destination.bulkCreate(destinations.map(dest => ({ ...dest, tourId: tour.id })));

    res.json({ status: 200, data: tour, message: 'Tour updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Server Error', data: null });
  }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ status: 404, message: 'Tour not found', data: null });
    }
    await tour.destroy();
    res.json({ status: 200, message: 'Tour deleted successfully', data: null });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Server Error', data: null });
  }
};
