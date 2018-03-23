export class SearchResultItem {
	Title: string;
	Desc: string;
	Price: number;
	Stars: number;
	Reviews: number;
	Formats: Formats[];
	MediaFormats: number[];
	Credits: number;
	InBundles: boolean;
	Designations: string[];
	FoS: FoS[];
	Session: Session[];
	CourseId: string;
	Version: string;
	Revision: string;
	Acronym: string;
	Link: string;
	Published: string;
	Expires: string;
	Supplements: string[];
	ButtonStatus: number;
	Brand: Brand;
	IsEarlyBird: boolean;
}

class Session {
	Id: string;
	StartDateTime: string;
	EndDateTime: string;
	SessionLocation?: SessionLocation[];
}

class SessionLocation {
	City: string;
	State: string;
	ST: string;
	TimeZone: string;
}

export enum Formats {
	"In-house Training" = 1, // CPL delivery formats 1, 6 / media formats 3, 18, 19, 36
	"Seminars and Conferences" = 2, // CPL media formats: Seminar: 4, 37 / Conference: 7, 9
	"Webinars" = 4, // media formats: 8, 28, 30
	"Online and Mobile" = 5, // media formats: O&M 1, 6, 29, 31, 32, 33, 35, 38, 39, 41 / Download: 2, 34, 40
	"Print-based" = 6 // media formats: 5, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22
}

export enum FoS {
	"Accounting & Auditing" = 1,
	"Consulting Services" = 2,
	"Technology" = 3,
	"Management" = 4,
	"Personal Development" = 5,
	"Specialized Knowledge & Applications" = 6,
	"Taxation" = 7,
	"Ethics" = 8,
	"Yellowbook" = 9
}

export enum Brand {
	"Checkpoint Learning" = 1,
	"Gear Up" = 2,
	"AuditWatch" = 3,
	"EBIA" = 4
}

// Need clarification on this.
// In its current state, this does not appear to be implementable.
// export enum ButtonStatus {
// 	"Launch" = 1,
// 	"Register" = 2,
// 	"Registered" = 3,
// 	"Add to Cart" = 4,
// 	"Sold Out" = 5,
// 	"Wait List" = 6,
// 	"Wait Listed" = 7
// }
