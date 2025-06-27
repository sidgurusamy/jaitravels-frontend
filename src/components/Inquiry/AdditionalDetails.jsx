import React from 'react'

function AdditionalDetails({formData, handleChange}) {
  return (
<div className='relative'>
          <label className="block text-sm font-semibold mb-1">Additional Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Any special requests or questions?"
          />
        </div>
  )
}

export default AdditionalDetails
