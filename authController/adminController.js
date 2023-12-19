import Area from '../model/areamodel.js';
import userdb from '../model/usermodel.js'
const adminArea = async (req, res) => {
  try {
    const { areaName, totalSlots } = req.body;
    const adminId = req.userId;
    // Check if the area already exists for the specified adminId
    let existingArea = await Area.findOne({ adminId });

    if (!existingArea) {
      // If the area doesn't exist, create a new Area instance
      existingArea = new Area({ adminId });
    }

    // Add the new address to the siteAddress array
    existingArea.siteAddress.push({ areaName, totalSlots });

    // Save the changes to the database
    await existingArea.save();

    res.status(200).json({ message: 'Address added successfully', area: existingArea });
  } catch (error) {
    console.error('Error adding address:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editDataByAdmin = async (req, res) => {
  try {

    const userId = req.params.id;
    const user = await userdb.findById(userId);
    console.log(user);
    if (user.Role < 2) {
      return res.send('You are not able to update someone with a upper role');
    }
    const updateFields = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      Address: req.body.Address,
      phoneNumber: req.body.phoneNumber,
      status: req.body.status,
      Role: req.body.Role,
      Updated_At: new Date(),
      is_verified: req.body.is_verified,
      is_Deleted: req.body.is_Deleted
    };
    const userData = await userdb.findByIdAndUpdate(userId, { $set: updateFields }, { new: true });
    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      return res.status(200).json(userData);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: `Internal error: ${err.message}` });
  }
};
export {
  adminArea, editDataByAdmin
}