import React from "react";
import { BarChart3 } from "lucide-react";

type Props = {
  className?: string;
};

const DashboardIcon = ({ className }: Props) => {
  return <BarChart3 className={className} size={16} />;
};

export default DashboardIcon;

