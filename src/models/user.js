import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

/**
 * Model Schema
 * 
 * Defines fields and its validations
 * and constraints
 */

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

/**
 * Schema Hooks
 */

userSchema.pre('save', function (next) {
	const user = this;

	// generate salt (randomly generated string of chars)
	bcrypt.genSalt(10, (error, salt) => {
		if (error) return next(error);
		// encrypt password using the salt
		bcrypt.hash(user.password, salt, null, (error, hash) => {
			if (error) return next(error);
			// overwrite password with salted + hashed one
			user.password = hash;
			next();
		});
	});
});

/**
 * Schema Methods
 * 
 * This allows us to use a method
 * from the model instance and manipulate
 * its context.
 */

userSchema.methods.comparePassword = function (candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
		if (error) return callback(error);
		callback(null, isMatch)
	});
}

// Create the model class
const UserModel = mongoose.model('user', userSchema);

export default UserModel;