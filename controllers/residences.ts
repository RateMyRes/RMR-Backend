import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

enum Category {
	FirstYear,
	UpperYear,
	GraduateYear,
	MatureYear,
}

interface Residence {
	_id: Number;
	name: String;
	location: String;
	reviews: [String];
	photos: [String];
	info: [String];
	category: [Category];
	roomType: [String];
}

const getResidences = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Placeholder
	return res.status(200).json({
		message: 'Fetched All Residences',
	});
};

const getResidence = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Placeholder
	console.log(req.params);
	return res.status(200).json({
		message: `Fetched residence ${req.params.id}`,
	});
};

export default { getResidence, getResidences };
