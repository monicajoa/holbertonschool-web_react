//------------------Task 11----------------
console.log("*** Output Task 11 ***")

export interface MajorCredits {
	credits: number;
	_majorBrand: void;
}

export interface MinorCredits {
	credits: number;
	_minorBrand: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	const sumCredits = subject1.credits + subject2.credits;
	return { credits: sumCredits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	const sumCredits = subject1.credits + subject2.credits;
	return { credits: sumCredits } as MinorCredits;
}
