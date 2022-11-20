import { FiMoreVertical, FiCheck } from "react-icons/fi";

import * as Checkbox from "@radix-ui/react-checkbox";

export function InputTask() {
  return (
		<div className="flex gap-1 items-center">
			<Checkbox.Root className="rounded-full border-light-text border-2 w-4 h-4" defaultChecked id="checkTask">
				<Checkbox.Indicator className="CheckboxIndicator">
          <FiCheck className="mx-px" size={10} />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<div className="border-b-2 border-light-actions flex items-center">
        <label htmlFor="checkTask">
          <input type="text" value="" className="outline-0" />
        </label>
				<FiMoreVertical />
			</div>
		</div>
	);
}