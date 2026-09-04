import React from 'react';

interface TeamMember {
  name: string;
  imageSrc?: string;
  role?: string;
  year?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid(props: TeamGridProps) {
  const members = props.members;
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 w-full">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-[calc(50%-1.25rem)] sm:w-[calc(33.333%-1.25rem)] md:w-[calc(16.666%-1.25rem)] min-w-[130px] max-w-[160px]"
        >
          {/* Profile Image with subtle shadow */}
          <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            {/* Standard img tag as requested */}
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Member Name (Light Grey / Off-White) */}
          <h3 className="text-[#ebebeb] font-semibold text-base leading-snug break-words max-w-full">
            {member.name}
          </h3>

          {/* Graduation Year (Red) */}
          {member.year && (
            <span className="text-[#b32424] font-medium text-sm mt-0.5">
              {member.year}
            </span>
          )}

          {/* Role / Title (Red) */}
          {member.role && (
            <span className="text-[#b32424] font-medium text-xs leading-tight mt-1 max-w-[140px]">
              {member.role}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}