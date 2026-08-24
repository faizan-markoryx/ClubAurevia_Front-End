import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import {
  createMembershipPlan,
  updateMembershipPlan
} from "../services/membershipService";

const CustomMembershipPlanModal = ({
  isOpen,
  onClose,
  editData,
  setIsApiRefresh,
  isApiRefresh
}: any) => {

  const isEditMode = Boolean(editData?._id);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    nights: "",
    days: "",
    description: ""
  });

  const [benefits, setBenefits] = useState<string[]>([""]);
  const [customFields, setCustomFields] = useState<{ label: string; value: string }[]>([
    { label: "", value: "" }
  ]);

  useEffect(() => {

    if (isOpen) {

      if (editData?._id) {

        setFormData({
          name: editData.name || "",
          price: editData.price ?? "",
          nights: editData.nights ?? "",
          days: editData.days ?? "",
          description: editData.description || ""
        });

        setBenefits(
          editData.benefits?.length ? editData.benefits : [""]
        );

        setCustomFields(
          editData.customFields?.length
            ? editData.customFields.map((f: any) => ({ label: f.label, value: f.value }))
            : [{ label: "", value: "" }]
        );

      } else {

        setFormData({
          name: "",
          price: "",
          nights: "",
          days: "",
          description: ""
        });

        setBenefits([""]);
        setCustomFields([{ label: "", value: "" }]);

      }

    }

  }, [isOpen, editData]);

  const handleChange = (e: any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // ---- Benefits (dynamic list) ----

  const handleBenefitChange = (index: number, value: string) => {
    const updated = [...benefits];
    updated[index] = value;
    setBenefits(updated);
  };

  const addBenefitRow = () => setBenefits([...benefits, ""]);

  const removeBenefitRow = (index: number) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  // ---- Custom Fields (dynamic key-value list) ----

  const handleCustomFieldChange = (index: number, key: "label" | "value", value: string) => {
    const updated = [...customFields];
    updated[index][key] = value;
    setCustomFields(updated);
  };

  const addCustomFieldRow = () => setCustomFields([...customFields, { label: "", value: "" }]);

  const removeCustomFieldRow = (index: number) => {
    setCustomFields(customFields.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    const trimmedName = formData.name.trim();
    const price = Number(formData.price);
    const nights = Number(formData.nights);
    const days = formData.days === "" ? undefined : Number(formData.days);

    if (!trimmedName) {
      toast.error("Plan name is required");
      return;
    }

    if (formData.price === "" || Number.isNaN(price) || price < 0) {
      toast.error("Price must be a valid number");
      return;
    }

    if (formData.nights === "" || Number.isNaN(nights) || nights <= 0) {
      toast.error("Nights must be greater than 0");
      return;
    }

    if (days !== undefined && (Number.isNaN(days) || days < 0)) {
      toast.error("Days must be a valid number");
      return;
    }

    const cleanedBenefits = benefits.map((b) => b.trim()).filter((b) => b.length > 0);

    const cleanedCustomFields = customFields
      .map((f) => ({ label: f.label.trim(), value: f.value.trim() }))
      .filter((f) => f.label.length > 0 || f.value.length > 0);

    if (cleanedCustomFields.some((f) => !f.label || !f.value)) {
      toast.error("Each custom field needs both a label and a value");
      return;
    }

    const payload: any = {
      name: trimmedName,
      price,
      nights,
      benefits: cleanedBenefits,
      description: formData.description.trim(),
      customFields: cleanedCustomFields
    };

    if (days !== undefined) {
      payload.days = days;
    }

    try {

      setLoading(true);

      if (isEditMode) {
        const res = await updateMembershipPlan(editData._id, payload);
        toast.success(res?.message || "Membership plan updated successfully");
      } else {
        const res = await createMembershipPlan(payload);
        toast.success(res?.message || "Custom membership plan created successfully");
      }

      setIsApiRefresh(!isApiRefresh);

      onClose();

    } catch (error: any) {

      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to save membership plan"
      );

    } finally {

      setLoading(false);

    }

  };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">

      <div className="flex min-h-full items-start justify-center p-4 sm:p-6">

        <div className="bg-white rounded-xl w-full max-w-2xl shadow-lg">

          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b">

            <h2 className="text-xl font-semibold text-primary">
              {isEditMode ? "Edit Custom Membership Plan" : "Add Custom Membership Plan"}
            </h2>

            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>

          </div>

          {/* Body */}
          <div className="p-5 max-h-[75vh] overflow-y-auto">

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

              <div>
                <label className="text-sm">Plan Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Price</label>
                <input
                  type="number"
                  name="price"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Nights</label>
                <input
                  type="number"
                  name="nights"
                  min="1"
                  value={formData.nights}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Days (optional)</label>
                <input
                  type="number"
                  name="days"
                  min="0"
                  value={formData.days}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>

              <div className="md:col-span-2">

                <label className="text-sm">
                  Description
                </label>

                <textarea
                  rows={3}
                  name="description"
                  value={formData.description}
                  placeholder="Short description of this custom plan"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border mt-1"
                />

              </div>

              {/* Benefits */}
              <div className="md:col-span-2">

                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm">Benefits</label>

                  <button
                    type="button"
                    onClick={addBenefitRow}
                    className="text-primary text-sm flex items-center gap-1"
                  >
                    <IoAddCircleOutline /> Add Benefit
                  </button>
                </div>

                <div className="space-y-2">

                  {benefits.map((benefit, index) => (

                    <div key={index} className="flex items-center gap-2">

                      <input
                        type="text"
                        value={benefit}
                        placeholder={`Benefit ${index + 1}`}
                        onChange={(e) => handleBenefitChange(index, e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                      />

                      {benefits.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeBenefitRow(index)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <IoCloseCircleOutline size={20} />
                        </button>
                      )}

                    </div>

                  ))}

                </div>

              </div>

              {/* Custom Fields */}
              <div className="md:col-span-2">

                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm">Custom Fields</label>

                  <button
                    type="button"
                    onClick={addCustomFieldRow}
                    className="text-primary text-sm flex items-center gap-1"
                  >
                    <IoAddCircleOutline /> Add Field
                  </button>
                </div>

                <div className="space-y-2">

                  {customFields.map((field, index) => (

                    <div key={index} className="flex items-center gap-2">

                      <input
                        type="text"
                        value={field.label}
                        placeholder="Label (e.g. Spa Access)"
                        onChange={(e) => handleCustomFieldChange(index, "label", e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                      />

                      <input
                        type="text"
                        value={field.value}
                        placeholder="Value (e.g. Included)"
                        onChange={(e) => handleCustomFieldChange(index, "value", e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                      />

                      {customFields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCustomFieldRow(index)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <IoCloseCircleOutline size={20} />
                        </button>
                      )}

                    </div>

                  ))}

                </div>

              </div>

              <div className="md:col-span-2 flex justify-end gap-3 pt-3">

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-primary text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
                >

                  {loading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Saving...
                    </>
                  ) : (
                    isEditMode ? "Update Plan" : "Save Plan"
                  )}

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default CustomMembershipPlanModal;
